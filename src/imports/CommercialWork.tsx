import imgMcDonalds from "figma:asset/15c98b41836eeaa78add4fa9a91fd641526aacea.png";
import imgTexasRoadhouseSymbol1 from "figma:asset/5b0b7795deed69984ddf48a4635ea7bb59cf573e.png";
import imgBillMiller from "figma:asset/1efe4766950d4d0199b295643f2f3a65cbe97b0d.png";
import imgSubway2016LogoSvg1 from "figma:asset/1448da4ed4ef5ecb455a281a90fb72182f5aed03.png";
import imgCircleKLogo1 from "figma:asset/8e6420179bc554e900bad0b8cfe11e13e5460312.png";
import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";
import imgPhoto1 from "figma:asset/f26fb1d57a685387a8c3565e4f0881a63d09178a.png";
import imgPhoto2 from "figma:asset/e2d6e4ad96d967d9dbc1b8f647cf664c5ed1e92b.png";
import imgPhoto3 from "figma:asset/8523aa1ed9c7a1dd94dcaa81f86286c397aa2005.png";
import imgPhoto4 from "figma:asset/145af62ddf97091b2f85253440b42fc28843977e.png";

function CenterWording() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 text-black text-center w-full" data-name="Center wording">
      <p className="font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[48px] relative shrink-0 text-[40px] tracking-[0.8px] whitespace-nowrap">Need a Fix?</p>
      <div className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[24px] tracking-[0.48px] w-[854px]">
        <p className="leading-[36px] mb-0">Keep your business running with our fast-response tile repair services. We work around your schedule to minimize disruption. Using quick-set materials, we get repaired areas back in service within hours. From cracked tiles to urgent damage, we handle repairs efficiently while keeping your doors open.</p>
        <p className="leading-[36px]">&nbsp;</p>
      </div>
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] tracking-[0.64px] whitespace-nowrap">{`"Trusted by businesses across Texas"`}</p>
    </div>
  );
}

function Top() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="top">
      <div className="col-1 h-[100px] ml-0 mt-[5px] relative row-1 w-[114px]" data-name="McDonalds">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMcDonalds} />
      </div>
      <div className="col-1 h-[110px] ml-[184px] mt-0 relative row-1 w-[195px]" data-name="Texas-Roadhouse-Symbol 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTexasRoadhouseSymbol1} />
      </div>
      <div className="col-1 h-[110px] ml-[449px] mt-0 relative row-1 w-[141px]" data-name="Bill Miller">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[136.36%] left-[-2.82%] max-w-none top-[-19.03%] w-[105.63%]" src={imgBillMiller} />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="bottom">
      <div className="col-1 h-[55px] ml-0 mt-[27.5px] relative row-1 w-[274px]" data-name="Subway_2016_logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubway2016LogoSvg1} />
      </div>
      <div className="col-1 h-[110px] ml-[344px] mt-0 relative row-1 w-[175px]" data-name="Circle-K-Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircleKLogo1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-center justify-center leading-[0] relative shrink-0">
      <Top />
      <Bottom />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[128px] h-[713.166px] items-center left-[calc(16.67%+67px)] top-[4717.39px] w-[874px]">
      <CenterWording />
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[4566px]">
      <div className="absolute bg-[#d8d0b9] h-[1015px] left-0 top-[4566px] w-[1512px]" />
      <Frame />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute content-stretch flex font-['Switzer_Variable:Medium',sans-serif] font-medium gap-[16px] items-start leading-[normal] left-[calc(50%+100px)] text-[24px] text-black top-[51px] w-[548px] whitespace-nowrap" data-name="Nav-Bar">
      <p className="relative shrink-0">RESIDENTIAL</p>
      <p className="relative shrink-0">COMMERCIAL</p>
      <p className="relative shrink-0">ABOUT</p>
      <p className="relative shrink-0">CONTACT</p>
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

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-[calc(50%-8px)] text-black top-[5684px]">
      <Contacts />
      <Socials />
      <Company />
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="absolute contents left-0 top-[5645px]" data-name="Footer Info">
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[calc(83.33%+116px)] text-[8px] text-black top-[5882px] tracking-[0.8px] whitespace-nowrap">CREATED BY HENRY NEFF</p>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[11px] text-[10px] text-black top-[5880px] tracking-[1px] whitespace-nowrap">© 2026 Lone Star Tile. All rights reserved</p>
      <Frame2 />
      <div className="absolute h-[154px] left-[32px] top-[5651.69px] w-[240px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] border-0 border-black border-solid h-[7px] left-0 top-[5645px] w-[1512px]" data-name="Footer bar" />
    </div>
  );
}

function Photo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Photo 4">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] w-full">Jefferson Bank of San Antonio</p>
      <div className="h-[562px] relative shrink-0 w-full" data-name="Photo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[911px]">
      <Photo />
    </div>
  );
}

function Outline() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Outline 2">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[384px]">Completed on schedule during occupied building</p>
    </div>
  );
}

function Outline1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Outline 3">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[367.48px]">ADA-compliant transitions</p>
    </div>
  );
}

function Outline2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Outline 4">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[367.48px]">Coordinated with multiple trades</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[144px] items-start ml-0 mt-0 relative row-1 w-full">
      <Outline />
      <Outline1 />
      <Outline2 />
    </div>
  );
}

function TextPoints() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Text-Points">
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-[357px]">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] w-full">Financial Institution</p>
      <TextPoints />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function ContractorText() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 text-black w-[600px]" data-name="Contractor Text">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] tracking-[0.64px] w-full">We speak contractor</p>
      <div className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[24px] tracking-[0.48px] w-full whitespace-pre-wrap">
        <p className="leading-[36px] mb-0">{`We understand your timeline is non-negotiable. That's why general contractors across San Antonio and Texas trust us for commercial tile installation that's completed on schedule, on spec, and on budget. From multi-location retail rollouts to occupied office buildings, we coordinate seamlessly with your project schedule and other trades.`}</p>
        <p className="leading-[36px] mb-0">&nbsp;</p>
        <p className="leading-[36px]">{`Our experience spans high-traffic restaurants, corporate headquarters, retail chains, and healthcare facilities. We're licensed, insured, and experienced with commercial building codes, ADA compliance, and franchise brand standards. When you need a tile subcontractor who shows up and delivers. We're your team.`}</p>
      </div>
    </div>
  );
}

function Photo1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Photo 4">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] w-full">Child-Safe Headquarters</p>
      <div className="h-[562px] relative shrink-0 w-full" data-name="Photo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto2} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[911px]">
      <Photo1 />
    </div>
  );
}

function Outline3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 2">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[384px]">Fast-track schedule met</p>
    </div>
  );
}

function Outline4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 3">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[347px]">Zero punch-list items</p>
    </div>
  );
}

function Outline5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 4">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[357px]">LEED considerations integrated</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[144px] items-start ml-0 mt-0 relative row-1 w-full">
      <Outline3 />
      <Outline4 />
      <Outline5 />
    </div>
  );
}

function TextPoints1() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Text-Points">
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] h-[158px] items-start relative shrink-0 w-[357px]">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] w-full">Corporate Office</p>
      <TextPoints1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Photo2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Photo 4">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] w-full">McDonald’s</p>
      <div className="h-[562px] relative shrink-0 w-full" data-name="Photo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto3} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[911px]">
      <Photo2 />
    </div>
  );
}

function Outline6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 2">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[357px]">{`High-traffic kitchen & dining area tile`}</p>
    </div>
  );
}

function Outline7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 3">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[367.48px]">Grease-resistant, slip-rated flooring</p>
    </div>
  );
}

function Outline8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 4">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[367.48px]">Franchise brand standards met</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-[180px] items-start relative shrink-0 w-[357px]">
      <Outline6 />
      <Outline7 />
      <Outline8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] h-[230px] items-start relative shrink-0 w-[357px]">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] whitespace-nowrap">Food Service</p>
      <Frame15 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function ArcText() {
  return (
    <div className="h-[631px] relative shrink-0 text-black w-[600px]" data-name="Arc. Text">
      <p className="absolute font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] left-0 text-[32px] top-0 tracking-[0.64px] whitespace-nowrap">Where blueprints meet reality</p>
      <div className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[0] left-0 text-[24px] top-[55px] tracking-[0.48px] w-[600px] whitespace-pre-wrap">
        <p className="leading-[36px] mb-0">our designs deserve flawless execution. Lone Star Tile works closely with commercial architects to bring specifications to life with precision craftsmanship and technical expertise. We understand commercial building codes, material performance requirements, and the importance of maintaining design integrity through installation.</p>
        <p className="leading-[36px] mb-0">&nbsp;</p>
        <p className="leading-[36px]">{`From concept to completion, we're a reliable partner for corporate offices, retail developments, restaurants, and healthcare facilities. Our portfolio includes landmark San Antonio projects like Jefferson Bank and projects for national brands including McDonald's, Circle K, and Valero. We read plans, meet specs, and deliver installations that reflect your vision—exactly as designed.`}</p>
      </div>
    </div>
  );
}

function Photo3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Photo 4">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] w-full">Circle K</p>
      <div className="h-[562px] relative shrink-0 w-full" data-name="Photo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto4} />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[911px]">
      <Photo3 />
    </div>
  );
}

function Outline9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 2">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[384px]">Rapid turnaround for remodels</p>
    </div>
  );
}

function Outline10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 3">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[367.48px]">Consistent installation across locations</p>
    </div>
  );
}

function Outline11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Outline 4">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[357px]">Chain store specifications</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[180px] items-start ml-0 mt-0 relative row-1 w-full">
      <Outline9 />
      <Outline10 />
      <Outline11 />
    </div>
  );
}

function TextPoints2() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Text-Points">
      <Frame19 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] h-[194px] items-start relative shrink-0 w-[357px]">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] w-full">Retail</p>
      <TextPoints2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[calc(8.33%-18px)] top-[520px] w-[1276px]">
      <Frame4 />
      <ContractorText />
      <Frame8 />
      <Frame12 />
      <ArcText />
      <Frame16 />
    </div>
  );
}

export default function CommercialWork() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="Commercial Work">
      <Group />
      <div className="absolute font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[0] left-[32px] text-[40px] text-black top-[261px] tracking-[0.8px] whitespace-nowrap">
        <p className="leading-[48px] mb-0">Texas sized projects</p>
        <p className="leading-[48px]">Texas sized standards</p>
      </div>
      <NavBar />
      <div className="absolute h-[89px] left-[32px] top-[22px] w-[143px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <FooterInfo />
      <Frame3 />
    </div>
  );
}