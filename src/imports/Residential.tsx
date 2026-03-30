import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";
import imgRectangle12 from "figma:asset/296e21358e91d2fe6faeaf23c5ce1bfca10db4ca.png";
import imgRectangle13 from "figma:asset/5d1b4f54067cb864eb79bc55d45a58e3bf5ded11.png";
import imgRectangle14 from "figma:asset/5e06adb64d8657513049d54e3e3ac77ebe34d283.png";
import imgRectangle16 from "figma:asset/36c4134fe0d47689c7e4b6553b0525dd3a544698.png";
import imgRectangle15 from "figma:asset/1387bd8803ed9d617475ab0483c38dee54ea77a1.png";
import imgRectangle17 from "figma:asset/dc2fccb0c18bff45d4fa9c5cb38a5f4fe49a4daf.png";

function Lines() {
  return (
    <div className="col-1 h-[27px] ml-0 mt-0 relative row-1 w-[53.022px]" data-name="Lines">
      <div className="absolute inset-[-18.52%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.0223 32">
          <g id="Lines">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeWidth="5" x2="53.0223" y1="2.5" y2="2.5" />
            <line id="Line 2" stroke="var(--stroke-0, black)" strokeWidth="5" x1="5.69522e-05" x2="53.0223" y1="16" y2="16" />
            <line id="Line 3" stroke="var(--stroke-0, black)" strokeWidth="5" x1="5.69522e-05" x2="53.0223" y1="29.5" y2="29.5" />
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

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[92px]">Custom Kitchen</p>
      <div className="bg-[#d9d9d9] shrink-0 size-[100px]" data-name="Tile Pic-1" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[28px] top-[507px] w-[337px]">
      <div className="h-[255px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle12} />
      </div>
      <Frame2 />
    </div>
  );
}

function Picture() {
  return (
    <div className="absolute contents left-[28px] top-[507px]" data-name="Picture 1">
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-[211px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle13} />
      </div>
      <div className="h-[216px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle14} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] shrink-0 size-[100px]" data-name="Tile Pic-2" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[123px]">Living Room Remodel</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Pictures() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] top-[998px] w-[344px]" data-name="Pictures 2">
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-[199px] relative shrink-0 w-[231px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle15} />
      </div>
      <div className="bg-[#d9d9d9] shrink-0 size-[100px]" data-name="Tile Pic-3" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-[233px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle16} />
      </div>
      <Frame7 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[12px] text-black tracking-[0.24px] w-full">Master Bathroom Renovation</p>
    </div>
  );
}

function Pictures1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] top-[1669px] w-[343px]" data-name="Pictures 3">
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] shrink-0 size-[100px]" data-name="Tile Pic-4" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[12px] text-black tracking-[0.24px] whitespace-nowrap">Modern Backsplash</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[2256px] w-[339px]">
      <div className="h-[268px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle17} />
      </div>
      <Frame9 />
    </div>
  );
}

function Picture1() {
  return (
    <div className="absolute contents left-[24px] top-[2256px]" data-name="Picture 4">
      <Frame8 />
    </div>
  );
}

function WorkButton() {
  return (
    <div className="bg-[#af2828] content-stretch flex h-[27px] items-center justify-center px-[17px] py-[5px] relative rounded-[40px] shrink-0 w-[94px]" data-name="work button">
      <p className="font-['Cabinet_Grotesk:Extrabold',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] whitespace-nowrap">About Us</p>
    </div>
  );
}

function LowerText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Lower Text">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[29.86px] text-black tracking-[-0.5972px] w-[342px]">{`Your home is your biggest investment and most personal space. `}</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-[342px]">{`Whether you're renovating a historic gem or building your dream kitchen, we guide you through every decision. From selecting the perfect tile to coordinating colors that complement your style. We respect your home, work on your schedule, and deliver results you'll love for decades. We understand your vision demands precision. Our team works seamlessly with architects and designers to execute detailed specifications, meet tight timelines, and maintain the highest standards of craftsmanship. From custom homes to historic renovations, we're the reliable installation partner your projects deserve.`}</p>
      <WorkButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] top-[2760px] w-[345px]">
      <LowerText />
    </div>
  );
}

function Credits() {
  return (
    <div className="absolute bottom-0 contents font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[calc(25%-1.25px)] text-[8px] text-black tracking-[0.8px] whitespace-nowrap" data-name="Credits">
      <p className="absolute bottom-[11px] left-[calc(25%-1.25px)] translate-y-full">© 2026 Lone Star Tile. All rights reserved</p>
      <p className="absolute bottom-[22px] left-[calc(25%+32.75px)] translate-y-full">CREATED BY HENRY NEFF</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bottom-[164px] content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal gap-[16px] items-start justify-center left-[calc(50%+92.5px)] text-[12px] tracking-[0.24px]">
      <p className="relative shrink-0">Residential</p>
      <p className="relative shrink-0">Commercial</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Company() {
  return (
    <div className="absolute bottom-[164px] contents leading-[16.8px] left-[calc(50%+92.5px)] text-black whitespace-nowrap" data-name="Company">
      <Frame10 />
      <p className="absolute bottom-[326px] font-['Switzer_Variable:Bold',sans-serif] font-bold left-[calc(50%+92.5px)] text-[14px] tracking-[0.28px] translate-y-full">company</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="absolute bottom-[86px] contents leading-[16.8px] left-[8px] text-black whitespace-nowrap" data-name="Socials">
      <p className="absolute bottom-[147px] font-['Switzer_Variable:Regular',sans-serif] font-normal left-[8px] text-[12px] tracking-[0.24px] translate-y-full">INSTAGRAM: @blank12</p>
      <p className="absolute bottom-[103px] font-['Switzer_Variable:Regular',sans-serif] font-normal left-[8px] text-[12px] tracking-[0.24px] translate-y-full">LinkedIn: @LoneStarTile</p>
      <p className="absolute bottom-[190px] font-['Switzer_Variable:Bold',sans-serif] font-bold left-[8px] text-[14px] tracking-[0.28px] translate-y-full">socials</p>
    </div>
  );
}

function Contacts() {
  return (
    <div className="absolute bottom-[222px] contents leading-[16.8px] left-[8px] text-black whitespace-nowrap" data-name="Contacts">
      <p className="absolute bottom-[239px] font-['Switzer_Variable:Regular',sans-serif] font-normal left-[8px] text-[12px] tracking-[0.24px] translate-y-full">PHONE: +1 123-456-7890</p>
      <p className="absolute bottom-[283px] font-['Switzer_Variable:Regular',sans-serif] font-normal left-[8px] text-[12px] tracking-[0.24px] translate-y-full">EMAIL: blank12@gmail.com</p>
      <p className="absolute bottom-[326px] font-['Switzer_Variable:Bold',sans-serif] font-bold left-[8px] text-[14px] tracking-[0.28px] translate-y-full">contacts</p>
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="absolute bottom-0 contents left-[-10px]" data-name="Footer Info">
      <Credits />
      <Company />
      <Socials />
      <Contacts />
      <div className="absolute bottom-[358px] h-[60px] left-[-4px] w-[96px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] border-black border-solid border-t-2 bottom-[424px] h-[7px] left-[-10px] w-[393px]" data-name="Footer bar" />
    </div>
  );
}

export default function Residential() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="Residential">
      <Nav />
      <div className="absolute font-['Cabinet_Grotesk:Extrabold',sans-serif] leading-[0] left-[32px] not-italic text-[24px] text-black top-[187px] tracking-[0.48px] w-[235px] whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Dear Residents,</p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px] mb-0">This is what the inside of you home could look like.</p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px] mb-0">Sincerely,</p>
        <p className="leading-[24px]">Lone Star Tile</p>
      </div>
      <Picture />
      <Pictures />
      <Pictures1 />
      <Picture1 />
      <Frame />
      <FooterInfo />
    </div>
  );
}