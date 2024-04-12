'use client'
import React, { ReactNode, useEffect } from 'react';
import annyang from 'annyang';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

type VoiceProps = {
    children?: ReactNode;
};

const Voice = ({ children }: VoiceProps) => {
    const router = useRouter();

    useEffect(() => {
        annyang.addCommands({
            'language': () => {
                router.push('/languages');
            },
            'news': () => {
                router.push('/Dashboard');
            },
            'api': () => {
                router.push('/Bestapi');
            },
            'technology': () => {
                router.push('/Technology');
            },
            'out':()=>{
                signOut()
            },
            'Website':()=>{
                router.push("/Bestai")
            }
        });
        annyang.start();
        
        return () => {
            annyang.removeCommands();
            annyang.abort();
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default Voice;
