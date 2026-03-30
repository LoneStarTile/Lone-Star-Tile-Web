import imgRectangle16 from "figma:asset/36c4134fe0d47689c7e4b6553b0525dd3a544698.png";
import imgRectangle15 from "figma:asset/1387bd8803ed9d617475ab0483c38dee54ea77a1.png";
import imgRectangle13 from "figma:asset/5d1b4f54067cb864eb79bc55d45a58e3bf5ded11.png";
import imgRectangle14 from "figma:asset/5e06adb64d8657513049d54e3e3ac77ebe34d283.png";
import imgRectangle12 from "figma:asset/296e21358e91d2fe6faeaf23c5ce1bfca10db4ca.png";
import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";
import imgRectangle17 from "figma:asset/dc2fccb0c18bff45d4fa9c5cb38a5f4fe49a4daf.png";

function Frame5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] h-[224px] shrink-0 w-[249px]" data-name="Tile Pic-3" />
      <div className="h-[358.235px] relative shrink-0 w-[605.867px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle15} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start ml-0 mt-0 relative row-1 w-[886.867px]">
      <div className="h-[476.839px] relative shrink-0 w-[427.477px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle16} />
      </div>
      <Frame5 />
    </div>
  );
}

function Pictures1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Pictures 3">
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-end left-[calc(16.67%+3px)] top-[3174.13px] w-[887px]">
      <Pictures1 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] min-w-full relative shrink-0 text-[24px] text-black text-right tracking-[0.48px] w-[min-content]">Master Bathroom Renovation</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <div className="h-[450.128px] relative shrink-0 w-[487.505px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle14} />
      </div>
      <div className="bg-[#d9d9d9] h-[224px] shrink-0 w-[249px]" data-name="Tile Pic-2" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] h-[941.203px] items-end relative shrink-0 w-[976px]">
      <div className="h-[460.076px] relative shrink-0 w-[465.213px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle13} />
      </div>
      <Frame8 />
    </div>
  );
}

function Pictures() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Pictures 2">
      <Frame7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-full">Living Room Remodel</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(25%+30px)] top-[1933px] w-[976px]">
      <Pictures />
      <Frame />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[32px] items-end relative shrink-0 w-full">
      <div className="h-[565.167px] relative shrink-0 w-[701px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle12} />
      </div>
      <div className="bg-[#d9d9d9] h-[224px] shrink-0 w-[249px]" data-name="Tile Pic-1" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-full">Custom Kitchen</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[413px] items-start left-[104px] top-[271px] w-[982px]">
      <div className="font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold h-[316px] leading-[0] relative shrink-0 text-[40px] text-black tracking-[0.8px] w-[559px] whitespace-pre-wrap">
        <p className="leading-[48px] mb-0">Dear Residents,</p>
        <p className="leading-[48px] mb-0">&nbsp;</p>
        <p className="leading-[48px] mb-0">This is what the inside of you home could look like.</p>
        <p className="leading-[48px] mb-0">&nbsp;</p>
        <p className="leading-[48px] mb-0">Sincerely,</p>
        <p className="leading-[48px]">Lone Star Tile</p>
      </div>
      <Frame9 />
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

function Frame12() {
  return (
    <div className="col-1 content-stretch flex gap-[32px] items-end ml-0 mt-0 relative row-1">
      <div className="h-[514.384px] relative shrink-0 w-[563.559px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle17} />
      </div>
      <div className="bg-[#d9d9d9] h-[224px] shrink-0 w-[249px]" data-name="Tile Pic-4" />
    </div>
  );
}

function Picture() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Picture 4">
      <Frame12 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-end left-[calc(16.67%+3px)] top-[4341.2px] w-[844.559px]">
      <Picture />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] min-w-full relative shrink-0 text-[24px] text-black text-center tracking-[0.48px] w-[min-content]">Modern Backsplash</p>
    </div>
  );
}

function WorkButton() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="work button">
      <div className="bg-[#af2828] col-1 h-[44px] ml-0 mt-0 rounded-[40px] row-1 w-[166px]" data-name="Button 2" />
      <p className="col-1 font-['Cabinet_Grotesk:Extrabold',sans-serif] leading-[24px] ml-[31px] mt-[10px] not-italic relative row-1 text-[24px] text-center text-white tracking-[0.48px] w-[103.055px]">About Us</p>
    </div>
  );
}

function LowerText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Lower Text">
      <p className="font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[48px] relative shrink-0 text-[40px] text-black tracking-[0.8px] w-[709px]">{`Your home is your biggest investment and most personal space. `}</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[618px]">{`Whether you're renovating a historic gem or building your dream kitchen, we guide you through every decision. From selecting the perfect tile to coordinating colors that complement your style. We respect your home, work on your schedule, and deliver results you'll love for decades. We understand your vision demands precision. Our team works seamlessly with architects and designers to execute detailed specifications, meet tight timelines, and maintain the highest standards of craftsmanship. From custom homes to historic renovations, we're the reliable installation partner your projects deserve.`}</p>
      <WorkButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(8.33%+2px)] top-[5256px] w-[709px]">
      <LowerText />
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

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-[calc(50%-8px)] text-black top-[6166px]">
      <Contacts />
      <Socials />
      <Company />
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="absolute contents left-0 top-[6127px]" data-name="Footer Info">
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[calc(83.33%+116px)] text-[8px] text-black top-[6364px] tracking-[0.8px] whitespace-nowrap">CREATED BY HENRY NEFF</p>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[11px] text-[10px] text-black top-[6362px] tracking-[1px] whitespace-nowrap">© 2026 Lone Star Tile. All rights reserved</p>
      <Frame13 />
      <div className="absolute h-[154px] left-[32px] top-[6133.69px] w-[240px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] border-black border-solid border-t-2 h-[7px] left-0 top-[6127px] w-[1512px]" data-name="Footer bar" />
    </div>
  );
}

export default function ResidentialWork() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="Residential Work">
      <Frame3 />
      <Frame6 />
      <Frame1 />
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] left-[calc(83.33%+61px)] text-[24px] text-black top-[913px] tracking-[0.48px] whitespace-nowrap">(Scroll Down)</p>
      <NavBar />
      <div className="absolute h-[89px] left-[32px] top-[22px] w-[143px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <Frame11 />
      <Frame2 />
      <FooterInfo />
    </div>
  );
}