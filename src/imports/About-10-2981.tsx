import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";
import imgWbenc1 from "figma:asset/7e27992e65e400ea38d2f812589f267a66267c3b.png";
import imgEsbe1 from "figma:asset/424bd3c3707da0546d139b0904459970bfed6dfd.png";
import imgSbe1 from "figma:asset/0786cc7b78ef1bbda4088710bb6325da20a18966.png";
import imgHsbe1 from "figma:asset/6949fe3412ea28ac01b4f393aa2f91e9b6e05ba8.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[35.83px] tracking-[-0.7166px] w-[min-content]">Built on reputation, one tile at a time</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] tracking-[0.32px] w-[308px]">{`Lone Star Tile isn't just about laying tile—it's about building relationships that last as long as our installations. As a proud woman-owned business serving San Antonio and throughout Texas, we've earned our reputation one project at a time through unwavering quality, reliable timelines, and genuine care for every space we transform.`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[221px] items-center left-1/2 text-center text-white top-[281px] w-[351px]">
      <Frame2 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[12px] tracking-[0.24px] w-full">(Scroll Down)</p>
    </div>
  );
}

function IntroToAbout() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Intro to About">
      <div className="absolute bg-[#af2828] h-[856px] left-0 top-0 w-[393px]" data-name="Background-color" />
      <Frame1 />
    </div>
  );
}

function Lines() {
  return (
    <div className="col-1 h-[27px] ml-0 mt-0 relative row-1 w-[53.022px]" data-name="Lines">
      <div className="absolute inset-[-18.52%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.0223 32">
          <g id="Lines">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="5" x2="53.0223" y1="2.5" y2="2.5" />
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="5" x1="5.69522e-05" x2="53.0223" y1="16" y2="16" />
            <line id="Line 3" stroke="var(--stroke-0, white)" strokeWidth="5" x1="5.69522e-05" x2="53.0223" y1="29.5" y2="29.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavBox() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Nav Box">
      <Lines />
    </div>
  );
}

function Nav() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-[46px] w-[367px]" data-name="Nav">
      <div className="h-[60px] relative shrink-0 w-[96px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <NavBox />
    </div>
  );
}

function Photo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Photo-1">
      <div className="bg-[#d8d0b9] col-1 h-[375px] ml-0 mt-0 row-1 w-[312px]" data-name="Background-color" />
      <div className="bg-[#777] col-1 h-[251.045px] ml-[40px] mt-[62px] row-1 w-[231.423px]" data-name="Photo-1" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Photo />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal h-[294px] leading-[24px] min-w-full relative shrink-0 text-[16px] text-black text-center tracking-[0.32px] w-[min-content]">{`Founded on the principles of craftsmanship and integrity, Lone Star Tile has grown from serving local San Antonio communities to becoming a trusted partner for commercial projects statewide. We've worked alongside general contractors, architects, interior designers, and homeowners to bring countless visions to life—from the professional elegance of major banking institutions' corporate spaces to the intimate beauty of historic district bathroom renovations.`}</p>
    </div>
  );
}

function Photo1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Photo-1">
      <div className="bg-[#d8d0b9] col-1 h-[375px] ml-0 mt-0 row-1 w-[312px]" data-name="Background-color" />
      <div className="bg-[#777] col-1 h-[251.045px] ml-[40px] mt-[62px] row-1 w-[231.423px]" data-name="Photo-1" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Photo1 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-black text-center tracking-[0.32px] w-[min-content]">{`What truly sets us apart isn't just our technical expertise—though we bring decades of combined experience to every project. It's our commitment to being genuine partners in your success. We listen to your vision, offer honest guidance when you need it, and deliver results that exceed expectations.`}</p>
    </div>
  );
}

function Photo2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Photo-1">
      <div className="bg-[#d8d0b9] col-1 h-[375px] ml-0 mt-0 row-1 w-[312px]" data-name="Background-color" />
      <div className="bg-[#777] col-1 h-[251.045px] ml-[40px] mt-[62px] row-1 w-[231.423px]" data-name="Photo-1" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Photo2 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-black text-center tracking-[0.32px] w-[min-content]">{`Whether you're a homeowner dreaming of the perfect kitchen backsplash or a general contractor managing a multi-location commercial build, we approach every project with the same dedication to excellence. Our work speaks for itself across the city's most prestigious residential communities and in some of its most recognizable commercial landmarks.`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[27px] top-[872px] w-[339px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold h-[14.907px] leading-[34.832px] ml-0 mt-0 relative row-1 text-[24.88px] text-black tracking-[0.4976px] w-[331px]">Why Choose Lone Star Tile:</p>
    </div>
  );
}

function Component() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="1">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] ml-0 mt-0 relative row-1 text-[20.74px] tracking-[0.4148px] whitespace-nowrap">Quality Without Compromise</p>
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] ml-0 mt-[31px] relative row-1 text-[16px] tracking-[0.32px] w-[330px]">{`Every tile is set with precision, every grout line is perfect, and every project reflects our commitment to excellence. We don't cut corners because your project—and your trust—deserve better.`}</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="2">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] ml-0 mt-0 relative row-1 text-[20.74px] tracking-[0.4148px] whitespace-nowrap">Reliability You Can Count On</p>
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] ml-0 mt-[31px] relative row-1 text-[16px] tracking-[0.32px] w-[330px]">{`In construction, timing is everything. We show up when we say we will, coordinate seamlessly with your schedule, and complete projects on time. Your timeline isn't just important to you—it's important to us.`}</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="3">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] ml-0 mt-0 relative row-1 text-[20.74px] tracking-[0.4148px] whitespace-nowrap">Expert Guidance</p>
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] ml-0 mt-[47px] relative row-1 text-[16px] tracking-[0.32px] w-[330px]">{`Not sure which tile is right for your space? Wondering about color coordination or material durability? We share our expertise freely to help you make confident decisions you'll love for years to come.`}</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="4">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] ml-0 mt-0 relative row-1 text-[20.74px] tracking-[0.4148px] whitespace-nowrap">Woman-Owned Excellence</p>
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] ml-0 mt-[31px] relative row-1 text-[16px] tracking-[0.32px] w-[330px]">{`We're proud to bring diverse perspectives and unwavering standards to the San Antonio tile industry. Our woman-owned business status reflects our commitment to excellence and innovation in every project.`}</p>
    </div>
  );
}

function Scroll() {
  return (
    <div className="bg-[#fffae7] h-[217.811px] relative shrink-0 w-full" data-name="Scroll">
      <div className="content-stretch flex gap-[128px] items-start leading-[0] pr-[100px] py-[44px] relative size-full text-black">
        <Component />
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[27px] top-[2819px] w-[331px]">
      <Group />
      <Scroll />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[166px] items-center left-[6.94%] right-[-103.38%] top-[calc(50%+321.78px)]">
      <div className="h-[59.62px] relative shrink-0 w-[107.22px]" data-name="WBENC 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.25%] left-[-5.98%] max-w-none top-[-6.99%] w-[112.11%]" src={imgWbenc1} />
        </div>
      </div>
      <div className="h-[59.989px] relative shrink-0 w-[59.567px]" data-name="ESBE 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.03%] left-[-3.12%] max-w-none top-[-0.02%] w-[106.38%]" src={imgEsbe1} />
        </div>
      </div>
      <div className="h-[59.348px] relative shrink-0 w-[58.971px]" data-name="SBE 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.77%] left-[-29.73%] max-w-none top-[-7.42%] w-[160.05%]" src={imgSbe1} />
        </div>
      </div>
      <div className="h-[59.912px] relative shrink-0 w-[48.249px]" data-name="HSBE 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-11.92%] max-w-none top-0 w-[124.17%]" src={imgHsbe1} />
        </div>
      </div>
    </div>
  );
}

function Photo3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Photo 2">
      <div className="bg-[#777] h-[280.376px] shrink-0 w-full" data-name="Photo-2" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-full">First and Last</p>
    </div>
  );
}

function Photo4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Photo 3">
      <div className="bg-[#777] h-[280.376px] shrink-0 w-full" data-name="Photo-2" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-full">First and Last</p>
    </div>
  );
}

function Photo5() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Photo 4">
      <div className="bg-[#777] h-[280.376px] shrink-0 w-full" data-name="Photo-2" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-full">First and Last</p>
    </div>
  );
}

function Photo6() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Photo 5">
      <div className="bg-[#777] h-[280.376px] shrink-0 w-full" data-name="Photo-2" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-full">First and Last</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <Photo3 />
      <Photo4 />
      <Photo5 />
      <Photo6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[128px] items-center left-[calc(50%-0.27px)] top-[3325.78px] w-[254.465px]">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[35.83px] text-black text-center tracking-[-0.7166px] w-full">Meet our Team</p>
      <Frame9 />
    </div>
  );
}

function Credits() {
  return (
    <div className="-translate-x-1/2 absolute contents font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-1/2 text-[8px] text-black top-[5464.28px] tracking-[0.8px] whitespace-nowrap" data-name="Credits">
      <p className="absolute left-[calc(25%+8.75px)] top-[5475.28px]">© 2026 Lone Star Tile. All rights reserved</p>
      <p className="absolute left-[calc(50%-55.5px)] top-[5464.28px]">CREATED BY HENRY NEFF</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal gap-[16px] items-start justify-center left-[calc(87.5%-10.38px)] text-[12px] top-[5206.28px] tracking-[0.24px]">
      <p className="relative shrink-0">Residential</p>
      <p className="relative shrink-0">Commercial</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Company() {
  return (
    <div className="-translate-x-1/2 absolute contents leading-[16.8px] left-[calc(87.5%-10.38px)] text-black top-[5160.28px] whitespace-nowrap" data-name="Company">
      <Frame10 />
      <p className="absolute font-['Switzer_Variable:Bold',sans-serif] font-bold left-[calc(87.5%-44.88px)] text-[14px] top-[5160.28px] tracking-[0.28px]">company</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="absolute contents leading-[16.8px] left-[18px] text-black top-[5296.28px] whitespace-nowrap" data-name="Socials">
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal left-[18px] text-[12px] top-[5339.28px] tracking-[0.24px]">INSTAGRAM: @blank12</p>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal left-[18px] text-[12px] top-[5383.28px] tracking-[0.24px]">LinkedIn: @LoneStarTile</p>
      <p className="absolute font-['Switzer_Variable:Bold',sans-serif] font-bold left-[18px] text-[14px] top-[5296.28px] tracking-[0.28px]">socials</p>
    </div>
  );
}

function Contacts() {
  return (
    <div className="absolute contents leading-[16.8px] left-[18px] text-black top-[5160.28px] whitespace-nowrap" data-name="Contacts">
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal left-[18px] text-[12px] top-[5247.28px] tracking-[0.24px]">PHONE: +1 123-456-7890</p>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal left-[18px] text-[12px] top-[5203.28px] tracking-[0.24px]">EMAIL: blank12@gmail.com</p>
      <p className="absolute font-['Switzer_Variable:Bold',sans-serif] font-bold left-[18px] text-[14px] top-[5160.28px] tracking-[0.28px]">contacts</p>
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[5055.28px]" data-name="Footer Info">
      <Credits />
      <Company />
      <Socials />
      <Contacts />
      <div className="absolute h-[60px] left-[6px] top-[5068.28px] w-[96px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] border-black border-solid border-t-2 h-[7px] left-0 top-[5055.28px] w-[393px]" data-name="Footer bar" />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="About">
      <IntroToAbout />
      <Nav />
      <Frame3 />
      <Frame7 />
      <p className="absolute font-['Switzer_Variable:Regular','Noto_Sans_Symbols:Regular',sans-serif] font-normal h-[26px] leading-[36px] left-[calc(75%+2.25px)] text-[96px] text-black top-[3047px] tracking-[1.92px] w-[96px]">→</p>
      <Frame />
      <Frame8 />
      <FooterInfo />
    </div>
  );
}