import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";
import imgPhoto1 from "figma:asset/f26fb1d57a685387a8c3565e4f0881a63d09178a.png";
import imgImage1 from "figma:asset/e2d6e4ad96d967d9dbc1b8f647cf664c5ed1e92b.png";
import imgImage2 from "figma:asset/8523aa1ed9c7a1dd94dcaa81f86286c397aa2005.png";
import imgImage3 from "figma:asset/145af62ddf97091b2f85253440b42fc28843977e.png";
import imgMcDonalds from "figma:asset/15c98b41836eeaa78add4fa9a91fd641526aacea.png";
import imgTexasRoadhouseSymbol1 from "figma:asset/5b0b7795deed69984ddf48a4635ea7bb59cf573e.png";
import imgBillMiller from "figma:asset/1efe4766950d4d0199b295643f2f3a65cbe97b0d.png";
import imgSubway2016LogoSvg1 from "figma:asset/1448da4ed4ef5ecb455a281a90fb72182f5aed03.png";
import imgCircleKLogo1 from "figma:asset/8e6420179bc554e900bad0b8cfe11e13e5460312.png";

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

function Photo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Photo 4">
      <div className="col-1 h-[524px] ml-[2px] mt-[32px] relative row-1 w-[359px]" data-name="Photo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-101.38%] max-w-none top-0 w-[201.48%]" src={imgPhoto1} />
        </div>
      </div>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold h-[22px] leading-[34.832px] ml-0 mt-0 relative row-1 text-[24.88px] text-black tracking-[0.4976px] w-[364px]">Jefferson Bank of San Antonio</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] ml-0 mt-0 relative row-1 text-[20.74px] text-black tracking-[0.4148px] w-[200px]">Financial Institution</p>
    </div>
  );
}

function Outline() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[277px]" data-name="Outline 2">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-full">Completed on schedule during occupied building</p>
    </div>
  );
}

function Outline1() {
  return (
    <div className="bg-[rgba(217,217,217,0)] content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[277px]" data-name="Outline 3">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal h-[18.846px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-[265.005px]">ADA-compliant transitions</p>
    </div>
  );
}

function Outline2() {
  return (
    <div className="bg-[rgba(217,217,217,0)] content-stretch flex flex-col h-[24px] items-start pr-[2px] relative shrink-0 w-[277.362px]" data-name="Outline 4">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-[275.031px]">Coordinated with multiple trades</p>
    </div>
  );
}

function TextPoints() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text-Points">
      <Outline />
      <Outline1 />
      <Outline2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[277.362px]">
      <Group />
      <TextPoints />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Photo />
      <Frame1 />
    </div>
  );
}

function Project() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.5px)] top-[373px] w-[364px]" data-name="Project 1">
      <Frame />
    </div>
  );
}

function Photo1() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Photo 4">
      <div className="aspect-[766/1050] col-1 ml-[0.4%] mt-[24.03px] relative row-1 w-[99.6%]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-23.34%] max-w-none top-[0.22%] w-[137.08%]" src={imgImage1} />
        </div>
      </div>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] ml-0 mt-0 relative row-1 text-[24.88px] text-black tracking-[0.4976px] w-[83.38%]">Child-Safe Headquarters</p>
    </div>
  );
}

function Outline3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[277px]" data-name="Outline 2">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] whitespace-nowrap">Fast-track schedule met</p>
    </div>
  );
}

function Outline4() {
  return (
    <div className="bg-[rgba(217,217,217,0)] content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[277px]" data-name="Outline 3">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal h-[18.846px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-[265.005px]">Zero punch-list items</p>
    </div>
  );
}

function Outline5() {
  return (
    <div className="bg-[rgba(217,217,217,0)] content-stretch flex flex-col h-[24px] items-start pr-[2px] relative shrink-0 w-[277.362px]" data-name="Outline 4">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-[275.031px]">LEED considerations integrated</p>
    </div>
  );
}

function TextPoints1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text-Points">
      <Outline3 />
      <Outline4 />
      <Outline5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[303px]">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] min-w-full relative shrink-0 text-[20.74px] text-black tracking-[0.4148px] w-[min-content]">Corporate Office</p>
      <TextPoints1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Photo1 />
      <Frame3 />
    </div>
  );
}

function Project1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.5px)] top-[1215px] w-[364px]" data-name="Project 2">
      <Frame2 />
    </div>
  );
}

function Photo2() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Photo 4">
      <div className="aspect-[766/1050] col-1 ml-[0.4%] mt-[24.03px] relative row-1 w-[99.6%]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-23.34%] max-w-none top-[0.22%] w-[137.08%]" src={imgImage2} />
        </div>
      </div>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] ml-0 mt-0 relative row-1 text-[24.88px] text-black tracking-[0.4976px] w-[83.38%]">{`McDonald's`}</p>
    </div>
  );
}

function Outline6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[277px]" data-name="Outline 2">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] whitespace-nowrap">{`High-traffic kitchen & dining area tile`}</p>
    </div>
  );
}

function Outline7() {
  return (
    <div className="bg-[rgba(217,217,217,0)] content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[277px]" data-name="Outline 3">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] whitespace-nowrap">Grease-resistant, slip-rated flooring</p>
    </div>
  );
}

function Outline8() {
  return (
    <div className="bg-[rgba(217,217,217,0)] content-stretch flex flex-col h-[24px] items-start pr-[2px] relative shrink-0 w-[277.362px]" data-name="Outline 4">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-[275.031px]">Franchise brand standards met</p>
    </div>
  );
}

function TextPoints2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text-Points">
      <Outline6 />
      <Outline7 />
      <Outline8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[303px]">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] relative shrink-0 text-[20.74px] text-black tracking-[0.4148px] whitespace-nowrap">Food Service</p>
      <TextPoints2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Photo2 />
      <Frame5 />
    </div>
  );
}

function Project2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.5px)] top-[2484px] w-[364px]" data-name="Project 3">
      <Frame4 />
    </div>
  );
}

function Photo3() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Photo 4">
      <div className="aspect-[766/1050] col-1 ml-[0.4%] mt-[24.03px] relative row-1 w-[99.6%]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-23.34%] max-w-none top-[0.22%] w-[137.08%]" src={imgImage3} />
        </div>
      </div>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] ml-0 mt-0 relative row-1 text-[24.88px] text-black tracking-[0.4976px] w-[83.38%]">Circle K</p>
    </div>
  );
}

function Outline9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[277px]" data-name="Outline 2">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] whitespace-nowrap">Rapid turnaround for remodels</p>
    </div>
  );
}

function Outline10() {
  return (
    <div className="bg-[rgba(217,217,217,0)] content-stretch flex flex-col h-[24px] items-start pr-[2px] relative shrink-0 w-[277.362px]" data-name="Outline 4">
      <div aria-hidden="true" className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-[275.031px]">Chain store specifications</p>
    </div>
  );
}

function Outline11() {
  return (
    <div className="bg-[rgba(217,217,217,0)] content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-[277px]" data-name="Outline 3">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid border-t-2 inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.32px] w-full">Consistent installation across locations</p>
    </div>
  );
}

function TextPoints3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text-Points">
      <Outline9 />
      <Outline10 />
      <Outline11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[303px]">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] relative shrink-0 text-[20.74px] text-black tracking-[0.4148px] whitespace-nowrap">Retail</p>
      <TextPoints3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Photo3 />
      <Frame7 />
    </div>
  );
}

function Project3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.5px)] top-[3264px] w-[364px]" data-name="Project 4">
      <Frame6 />
    </div>
  );
}

function ContractorText() {
  return (
    <div className="absolute contents left-[17px] text-black top-[1930px]" data-name="Contractor Text">
      <div className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[0] left-[17px] text-[16px] top-[1964px] tracking-[0.32px] w-[309px] whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`We understand your timeline is non-negotiable. That's why general contractors across San Antonio and Texas trust us for commercial tile installation that's completed on schedule, on spec, and on budget. From multi-location retail rollouts to occupied office buildings, we coordinate seamlessly with your project schedule and other trades.`}</p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px]">{`Our experience spans high-traffic restaurants, corporate headquarters, retail chains, and healthcare facilities. We're licensed, insured, and experienced with commercial building codes, ADA compliance, and franchise brand standards. When you need a tile subcontractor who shows up and delivers. We're your team.`}</p>
      </div>
      <p className="absolute font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] left-[17px] text-[24.88px] top-[1930px] tracking-[0.4976px] whitespace-nowrap">We speak contractor</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[14px] text-black top-[4003px] w-[309px]">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] relative shrink-0 text-[24.88px] tracking-[0.4976px] w-full">Where blueprints meet reality</p>
      <div className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">our designs deserve flawless execution. Lone Star Tile works closely with commercial architects to bring specifications to life with precision craftsmanship and technical expertise. We understand commercial building codes, material performance requirements, and the importance of maintaining design integrity through installation.</p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px]">{`From concept to completion, we're a reliable partner for corporate offices, retail developments, restaurants, and healthcare facilities. Our portfolio includes landmark San Antonio projects like Jefferson Bank and projects for national brands including McDonald's, Circle K, and Valero. We read plans, meet specs, and deliver installations that reflect your vision—exactly as designed.`}</p>
      </div>
    </div>
  );
}

function Credits() {
  return (
    <div className="absolute bottom-0 contents font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[calc(25%+7.75px)] text-[8px] text-black tracking-[0.8px] whitespace-nowrap" data-name="Credits">
      <p className="absolute bottom-[11px] left-[calc(25%+7.75px)] translate-y-full">© 2026 Lone Star Tile. All rights reserved</p>
      <p className="absolute bottom-[22px] left-[calc(25%+41.75px)] translate-y-full">CREATED BY HENRY NEFF</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bottom-[164px] content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal gap-[16px] items-start justify-center left-[calc(75%+3.25px)] text-[12px] tracking-[0.24px]">
      <p className="relative shrink-0">Residential</p>
      <p className="relative shrink-0">Commercial</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Company() {
  return (
    <div className="absolute bottom-[164px] contents leading-[16.8px] left-[calc(75%+3.25px)] text-black whitespace-nowrap" data-name="Company">
      <Frame9 />
      <p className="absolute bottom-[326px] font-['Switzer_Variable:Bold',sans-serif] font-bold left-[calc(75%+3.25px)] text-[14px] tracking-[0.28px] translate-y-full">company</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="absolute bottom-[86px] contents leading-[16.8px] left-[17px] text-black whitespace-nowrap" data-name="Socials">
      <p className="absolute bottom-[147px] font-['Switzer_Variable:Regular',sans-serif] font-normal left-[17px] text-[12px] tracking-[0.24px] translate-y-full">INSTAGRAM: @blank12</p>
      <p className="absolute bottom-[103px] font-['Switzer_Variable:Regular',sans-serif] font-normal left-[17px] text-[12px] tracking-[0.24px] translate-y-full">LinkedIn: @LoneStarTile</p>
      <p className="absolute bottom-[190px] font-['Switzer_Variable:Bold',sans-serif] font-bold left-[17px] text-[14px] tracking-[0.28px] translate-y-full">socials</p>
    </div>
  );
}

function Contacts() {
  return (
    <div className="absolute bottom-[222px] contents leading-[16.8px] left-[17px] text-black whitespace-nowrap" data-name="Contacts">
      <p className="absolute bottom-[239px] font-['Switzer_Variable:Regular',sans-serif] font-normal left-[17px] text-[12px] tracking-[0.24px] translate-y-full">PHONE: +1 123-456-7890</p>
      <p className="absolute bottom-[283px] font-['Switzer_Variable:Regular',sans-serif] font-normal left-[17px] text-[12px] tracking-[0.24px] translate-y-full">EMAIL: blank12@gmail.com</p>
      <p className="absolute bottom-[326px] font-['Switzer_Variable:Bold',sans-serif] font-bold left-[17px] text-[14px] tracking-[0.28px] translate-y-full">contacts</p>
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="absolute bottom-0 contents left-[-1px]" data-name="Footer Info">
      <Credits />
      <Company />
      <Socials />
      <Contacts />
      <div className="absolute bottom-[358px] h-[60px] left-[5px] w-[96px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] border-0 border-black border-solid bottom-[424px] h-[7px] left-[-1px] w-[393px]" data-name="Footer bar" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-black text-center">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[29.86px] tracking-[-0.5972px] whitespace-nowrap">Need a Fix?</p>
      <div className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] tracking-[0.32px] w-[330px]">
        <p className="leading-[24px] mb-0">make this shorter-Keep your business running with our fast-response tile repair services. We work around your schedule to minimize disruption. Using quick-set materials, we get repaired areas back in service within hours. From cracked tiles to urgent damage, we handle repairs efficiently while keeping your doors open.</p>
        <p className="leading-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0 w-full">
      <div className="h-[43px] relative shrink-0 w-[49px]" data-name="McDonalds">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMcDonalds} />
      </div>
      <div className="h-[48px] relative shrink-0 w-[85px]" data-name="Texas-Roadhouse-Symbol 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTexasRoadhouseSymbol1} />
      </div>
      <div className="h-[48px] relative shrink-0 w-[61px]" data-name="Bill Miller">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[136.36%] left-[-2.82%] max-w-none top-[-19.03%] w-[105.63%]" src={imgBillMiller} />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[119px]" data-name="Subway_2016_logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubway2016LogoSvg1} />
      </div>
      <div className="h-[47px] relative shrink-0 w-[76px]" data-name="Circle-K-Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircleKLogo1} />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[295px]">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-end relative shrink-0">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] relative shrink-0 text-[24.88px] text-black text-center tracking-[0.4976px] w-[296px]">{`"Trusted by businesses across Texas"`}</p>
      <Frame14 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#d8d0b9] content-stretch flex flex-col h-[653px] items-start left-[calc(50%-1px)] py-[64px] top-[4665px] w-[393px]">
      <Frame11 />
    </div>
  );
}

export default function Commercial() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="Commercial">
      <Nav />
      <div className="absolute font-['Cabinet_Grotesk:Black',sans-serif] leading-[0] left-[24px] not-italic text-[29.86px] text-black top-[188px] tracking-[-0.5972px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Texas sized projects</p>
        <p className="leading-[normal]">Texas sized standards</p>
      </div>
      <Project />
      <Project1 />
      <Project2 />
      <Project3 />
      <ContractorText />
      <Frame8 />
      <FooterInfo />
      <Frame10 />
    </div>
  );
}