import Image from 'next/image'
import LogoFacebook from '@/public/facebook_icon.svg'
import LogoInstagram from '@/public/instagram_icon.svg'
import LogoTwitter from '@/public/twitter_icon.svg'
import LogoYoutube from '@/public/youtube_icon.svg'
import { Separator } from "@/components/ui/separator"

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-palleteBlueVariant text-primary-content text-white text-center">
        <div className="flex justify-center space-x-6 mt-4 p-6">
            <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={LogoFacebook} width={40} height={40} alt='Facebook Logo' />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={LogoTwitter} width={40} height={40} alt='Twitter Logo' />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={LogoInstagram} width={40} height={40} alt='Instagram Logo' />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={LogoYoutube} width={40} height={40} alt='Youtube Logo' />
            </a>
        </div>
        <Separator className="my-4" />
        <p><span className='font-bold'>2025 © StoreSense.</span> All Rights Reserved.</p>
        <p>Made by StoreSense Team with 🧡</p>
    </footer>
  );
}

export default Footer;