import BtnRotatingBg from '@/components/Btnrotatingbg';

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-4 text-center text-white' >
      <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#ff0080,#ff8c00,#40e0d0,#8a2be2,#ff0080)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent font-serif font-bold'>
      Get Me A Kofi !
    </span>
      <p className='font-serif text-xl '>A crowdfunding platform for creators. Get funded today!</p>
      <div className='flex gap-4'>
        <BtnRotatingBg>
          Start Now
        </BtnRotatingBg>
        <BtnRotatingBg>
          Read Here
        </BtnRotatingBg>
      </div>
    </div>
  );
}
