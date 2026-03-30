import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";
import imgWbenc1 from "figma:asset/7e27992e65e400ea38d2f812589f267a66267c3b.png";
import imgEsbe1 from "figma:asset/424bd3c3707da0546d139b0904459970bfed6dfd.png";
import imgSbe1 from "figma:asset/0786cc7b78ef1bbda4088710bb6325da20a18966.png";
import imgHsbe1 from "figma:asset/6949fe3412ea28ac01b4f393aa2f91e9b6e05ba8.png";
import imgCtef from "figma:asset/881ba30fe7f6037167dbfb246539b56b86c83cb1.png";

function Photo() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start place-items-start relative row-1 self-start shrink-0" data-name="Photo 1">
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal h-[38px] leading-[36px] ml-0 mt-[471.82px] relative row-1 text-[24px] text-black tracking-[0.48px] w-[306.151px]">First and Last</p>
      <div className="bg-[#777] col-1 h-[463.817px] ml-0 mt-0 row-1 w-[383.498px]" data-name="Photo-1" />
    </div>
  );
}

function Photo1() {
  return (
    <div className="col-2 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start place-items-start relative row-1 self-start shrink-0" data-name="Photo 2">
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal h-[38px] leading-[36px] ml-[659.5px] mt-[471.82px] relative row-1 text-[24px] text-black tracking-[0.48px] w-[305.754px]">First and Last</p>
      <div className="bg-[#777] col-1 h-[463.817px] ml-[659.5px] mt-0 row-1 w-[383px]" data-name="Photo-2" />
    </div>
  );
}

function Photo2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start place-items-start relative row-2 self-start shrink-0" data-name="Photo 3">
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal h-[38px] leading-[36px] ml-0 mt-[1109.63px] relative row-1 text-[24px] text-black tracking-[0.48px] w-[305.754px]">First and Last</p>
      <div className="bg-[#777] col-1 h-[463.817px] ml-0 mt-[637.82px] row-1 w-[383px]" data-name="Photo-3" />
    </div>
  );
}

function Photo3() {
  return (
    <div className="col-2 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start place-items-start relative row-2 self-start shrink-0" data-name="Photo 4">
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal h-[38px] leading-[36px] ml-[659.5px] mt-[1109.63px] relative row-1 text-[24px] text-black tracking-[0.48px] w-[305.754px]">First and Last</p>
      <div className="bg-[#777] col-1 h-[463.817px] ml-[659.5px] mt-[637.82px] row-1 w-[383px]" data-name="Photo-4" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="gap-x-[276px] gap-y-[128px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] leading-[0] relative shrink-0 w-full">
      <Photo />
      <Photo1 />
      <Photo2 />
      <Photo3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[128px] items-center left-[calc(16.67%-17px)] top-[4599px] w-[1042.498px]">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[67px] text-black text-center tracking-[-1.34px] whitespace-nowrap">Meet our Team</p>
      <Frame1 />
    </div>
  );
}

function MeetOurTeam() {
  return (
    <div className="absolute contents left-[calc(16.67%-17px)] top-[4599px]" data-name="Meet Our Team">
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start place-items-start relative row-1 self-start shrink-0" data-name="Text 1">
      <div className="col-1 flex h-[814px] items-center justify-center ml-0 mt-0 relative row-1 w-[756px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(217,217,217,0)] h-[814px] w-[756px]" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[95px] mt-[71px] relative row-1 w-[566px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] relative text-[32px] text-black tracking-[3.2px] w-[566px]">{`Founded on the principles of craftsmanship and integrity, Lone Star Tile has grown from serving local San Antonio communities to becoming a trusted partner for commercial projects statewide. We've worked alongside general contractors, architects, interior designers, and homeowners to bring countless visions to life—from the professional elegance of major banking institutions' corporate spaces to the intimate beauty of historic district bathroom renovations.`}</p>
        </div>
      </div>
    </div>
  );
}

function Photo4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Photo-1">
      <div className="bg-[#d8d0b9] col-1 h-[814px] ml-[756px] mt-0 row-1 w-[757px]" data-name="Background-color" />
      <div className="bg-[#777] col-1 h-[670px] ml-[825.37px] mt-[72px] row-1 w-[617.632px]" data-name="Photo-1" />
    </div>
  );
}

function Text1() {
  return (
    <div className="col-2 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start place-items-start relative row-2 self-start shrink-0" data-name="Text 2">
      <div className="col-1 flex h-[814px] items-center justify-center ml-[756px] mt-[814px] relative row-1 w-[756px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(217,217,217,0)] h-[814px] w-[756px]" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[851px] mt-[990px] relative row-1 w-[566px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] relative text-[32px] text-black tracking-[3.2px] w-[566px]">{`What truly sets us apart isn't just our technical expertise—though we bring years of combined experience to every project. It's our commitment to being genuine partners in your success. We listen to your vision, offer honest guidance when you need it, and deliver results that exceed expectations.`}</p>
        </div>
      </div>
    </div>
  );
}

function Photo5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Photo-2">
      <div className="bg-[#d8d0b9] col-1 h-[814px] ml-0 mt-[814px] row-1 w-[755px]" data-name="Background-color-text-1" />
      <div className="bg-[#777] col-1 h-[670px] ml-[69px] mt-[886px] row-1 w-[616px]" data-name="Photo-2" />
    </div>
  );
}

function Text2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start place-items-start relative row-3 self-start shrink-0" data-name="Text 3">
      <div className="col-1 flex h-[814px] items-center justify-center ml-0 mt-[1628px] relative row-1 w-[756px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(217,217,217,0)] h-[814px] w-[756px]" />
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[95px] mt-[1762px] relative row-1 w-[566px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] relative text-[32px] text-black tracking-[3.2px] w-[566px]">{`Whether you're a homeowner dreaming of the perfect kitchen backsplash or a general contractor managing a multi-location commercial build, we approach every project with the same dedication to excellence. Our work speaks for itself across the city's most prestigious residential communities and in some of its most recognizable commercial landmarks.`}</p>
        </div>
      </div>
    </div>
  );
}

function Photo6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Photo-1">
      <div className="bg-[#d8d0b9] col-1 h-[814px] ml-[756px] mt-[1628px] row-1 w-[757px]" data-name="Background-color" />
      <div className="bg-[#777] col-1 h-[670px] ml-[825.37px] mt-[1700px] row-1 w-[617.632px]" data-name="Photo-1" />
    </div>
  );
}

function PhotosAbout() {
  return (
    <div className="grid-cols-[repeat(2,fit-content(100%))] grid-rows-[____fit-content(100%)_fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[2442px] inline-grid leading-[0] relative" data-name="Photos about">
      <Text />
      <div className="col-2 flex items-center justify-center justify-self-start relative row-1 self-start shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Photo4 />
        </div>
      </div>
      <Text1 />
      <div className="col-1 flex items-center justify-center justify-self-start relative row-2 self-start shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Photo5 />
        </div>
      </div>
      <Text2 />
      <div className="col-2 flex items-center justify-center justify-self-start relative row-3 self-start shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Photo6 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-center leading-[normal] left-[calc(16.67%-15px)] text-white top-[273px] w-[1038px]">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] min-w-full not-italic relative shrink-0 text-[67px] tracking-[-1.34px] w-[min-content]">Built on reputation, one tile at a time</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal relative shrink-0 text-[32px] text-center tracking-[3.2px] w-[990px]">{`Lone Star Tile isn't just about laying tile—it's about building relationships that last as long as our installations. As a proud woman-owned business serving San Antonio and throughout Texas, we've earned our reputation one project at a time through unwavering quality, reliable timelines, and genuine care for every space we transform.`}</p>
    </div>
  );
}

function IntroToAbout() {
  return (
    <div className="absolute contents left-0 top-[143px]" data-name="Intro to About">
      <div className="absolute bg-[#af2828] h-[854px] left-0 top-[143px] w-[1512px]" data-name="Background-color" />
      <Frame2 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute content-stretch flex font-['Switzer_Variable:Medium',sans-serif] font-medium gap-[16px] items-start leading-[normal] right-[calc(8.33%-18px)] text-[24px] text-black top-[51px] w-[548px] whitespace-nowrap" data-name="Nav-Bar">
      <p className="relative shrink-0">RESIDENTIAL</p>
      <p className="relative shrink-0">COMMERCIAL</p>
      <p className="relative shrink-0">ABOUT</p>
      <p className="relative shrink-0">CONTACT</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[214px] items-end left-1/2 top-[calc(50%+1102px)]">
      <div className="h-[100px] relative shrink-0 w-[180px]" data-name="WBENC 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.25%] left-[-5.98%] max-w-none top-[-6.99%] w-[112.11%]" src={imgWbenc1} />
        </div>
      </div>
      <div className="relative shrink-0 size-[100px]" data-name="ESBE 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.03%] left-[-3.12%] max-w-none top-[-0.02%] w-[106.38%]" src={imgEsbe1} />
        </div>
      </div>
      <div className="h-[100px] relative shrink-0 w-[99px]" data-name="SBE 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.77%] left-[-29.73%] max-w-none top-[-7.42%] w-[160.05%]" src={imgSbe1} />
        </div>
      </div>
      <div className="h-[100px] relative shrink-0 w-[81px]" data-name="HSBE 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-11.92%] max-w-none top-0 w-[124.17%]" src={imgHsbe1} />
        </div>
      </div>
      <div className="h-[99px] relative shrink-0 w-[100px]" data-name="CTEF">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtef} />
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[210.64px]" data-name="Contacts">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] tracking-[0.64px] w-full">contacts</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">EMAIL: blank12@gmail.com</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">PHONE: +1 123-456-7890</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[183.558px]" data-name="Socials">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] tracking-[0.64px] w-full">socials</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">INSTAGRAM: @blank12</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">LinkedIn: @LoneStarTile</p>
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[144.439px]" data-name="Company">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] tracking-[0.64px] w-full">company</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">Residential</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">Commercial</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">About</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-[calc(50%-8px)] text-black top-[6253px]">
      <Contacts />
      <Socials />
      <Company />
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="absolute contents left-0 top-[6214px]" data-name="Footer Info">
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[calc(83.33%+116px)] text-[8px] text-black top-[6451px] tracking-[0.8px] whitespace-nowrap">CREATED BY HENRY NEFF</p>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[11px] text-[10px] text-black top-[6449px] tracking-[1px] whitespace-nowrap">© 2026 Lone Star Tile. All rights reserved</p>
      <Frame5 />
      <div className="absolute h-[154px] left-[32px] top-[6220.69px] w-[240px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] border-black border-solid border-t-2 h-[7px] left-0 top-[6214px] w-[1512px]" data-name="Footer bar" />
    </div>
  );
}

function Component() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="1">
      <p className="col-1 font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[48px] ml-0 mt-0 relative row-1 text-[40px] tracking-[0.8px] whitespace-nowrap">Quality Without Compromise</p>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] ml-0 mt-[92px] relative row-1 text-[32px] tracking-[0.64px] w-[617px]">{`Every tile is set with precision, every grout line is perfect, and every project reflects our commitment to excellence. We don't cut corners because your project—and your trust—deserve better.`}</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="2">
      <p className="col-1 font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[48px] ml-0 mt-0 relative row-1 text-[40px] tracking-[0.8px] whitespace-nowrap">Reliability You Can Count On</p>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] ml-0 mt-[92px] relative row-1 text-[32px] tracking-[0.64px] w-[617px]">{`In construction, timing is everything. We show up when we say we will, coordinate seamlessly with your schedule, and complete projects on time. Your timeline isn't just important to you—it's important to us.`}</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="3">
      <p className="col-1 font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[48px] ml-0 mt-0 relative row-1 text-[40px] tracking-[0.8px] whitespace-nowrap">Expert Guidance</p>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] ml-0 mt-[92px] relative row-1 text-[32px] tracking-[0.64px] w-[617px]">{`Not sure which tile is right for your space? Wondering about color coordination or material durability? We share our expertise freely to help you make confident decisions you'll love for years to come.`}</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="4">
      <p className="col-1 font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[48px] ml-0 mt-0 relative row-1 text-[40px] tracking-[0.8px] whitespace-nowrap">Woman-Owned Excellence</p>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] ml-0 mt-[92px] relative row-1 text-[32px] tracking-[0.64px] w-[617px]">{`We're proud to bring diverse perspectives and unwavering standards to the San Antonio tile industry. Our woman-owned business status reflects our commitment to excellence and innovation in every project.`}</p>
    </div>
  );
}

function Scroll() {
  return (
    <div className="bg-[#fffae7] content-stretch flex gap-[128px] h-[491px] items-start leading-[0] px-[100px] py-[44px] relative shrink-0 w-[1512px]" data-name="Scroll">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 text-black top-[3709px]">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[67px] tracking-[-1.34px] w-[1512px]">Why Choose Lone Star Tile:</p>
      <Scroll />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="About">
      <MeetOurTeam />
      <p className="absolute font-['Switzer_Variable:Regular','Noto_Sans_Symbols:Regular',sans-serif] font-normal leading-[36px] left-[calc(83.33%+48px)] text-[96px] text-black top-[3592px] tracking-[1.92px] whitespace-nowrap">→</p>
      <div className="absolute flex h-[2442px] items-center justify-center left-0 top-[997px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <PhotosAbout />
        </div>
      </div>
      <IntroToAbout />
      <NavBar />
      <div className="absolute h-[89px] left-[32px] top-[22px] w-[143px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <Frame3 />
      <FooterInfo />
      <Frame4 />
    </div>
  );
}