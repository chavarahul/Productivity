import { poppin } from "@/app/constants";
import Image from "next/image";
// components/ArticleDetail.js
import Link from "next/link";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function ArticleDetail({ article, onBack }: any) {
  const startIndex = article.content.indexOf('Content:') + 'Content:'.length;
  const endIndex = article.content.lastIndexOf('[');

  // Extract the actual content
  const content = article.content.substring(startIndex, endIndex).trim();
  const handleWhatsAppShare = () => {
    const shareUrl = `whatsapp://send?text=${encodeURIComponent(article.title + '\n\n' + article.description+'\n\n'+article.summary+'\n\n'+article.url)}`;
    window.open(shareUrl, '_blank');
  };

  const handleCopyToClipboard = () => {
    const textToCopy = `${article.title}\n\n${article.description}`;
    navigator.clipboard.writeText(textToCopy);
    alert('Copied to clipboard!');
  };
  const contentLines = content.split('\n').slice(0, 70);
  return (
    <div className=" h-screen">
      <button onClick={onBack} className="absolute right-10 top-5">
        <CloseIcon className="text-white text-2xl"/>
      </button>
      <div className=" h-[17%]  flex-center mt-5">
        <h1 className={`${poppin.className} text-white font-bold textColor text-xl space`}>{article.title}</h1>
      </div>
      <div className=" h-[5%] px-60">
        <p className={`${poppin.className} text-white opacity-45 text-center space`}>{article.description}</p>
      </div>
      <div className=" h-[60%]">
        <div className="min-h-[40%] flex-center  leading-10 py-6 px-40">
          <p className={`text-white text-center  ${poppin.className}`}>
            {article.summary}
          </p>
        </div>
        <div className="min-h-[40%] flex-center  leading-10 py-6 px-20">
          <p className={`text-white text-center ${poppin.className} textColor`}>
            For more reference visit :{" "}
            <Link href={`${article.url}`} className="underline text-white">{article.url}</Link>
          </p>
        </div> <button onClick={handleWhatsAppShare}   className="text-white absolute top-20 right-10"  ><WhatsAppIcon className="text-2xl text-green-900"/></button>
        <button onClick={handleCopyToClipboard} className="text-white absolute top-32 right-10"><ContentCopyIcon className="text-white text-2xl"/></button>

      </div>
      {/* { <Image src={`${article.imageUrl}`} alt={article.title} width={10} height={10} />} */}
    </div>
  );
}
