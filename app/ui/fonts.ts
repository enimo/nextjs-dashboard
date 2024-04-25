import { Inter, Lusitana, Noto_Sans_SC } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const NotoSansSC = Noto_Sans_SC({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

