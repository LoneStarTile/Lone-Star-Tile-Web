import imgPhoto from "figma:asset/3a8578a9d74e907f1752b441c0046848948181d8.png";
import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";
import imgCommercialPic from "figma:asset/7e9192c43542e58faa7d59e306090b76a167c788.png";
import imgStar1 from "figma:asset/51d3a45f3e71b06a862572a28cbf214fd43b2333.png";

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

function AboutButton() {
  return (
    <div className="bg-[#af2828] content-stretch flex flex-col h-[23px] items-center justify-center pl-[8px] pr-[7px] relative rounded-[40px] shrink-0 w-[150px]" data-name="about button">
      <p className="font-['Cabinet_Grotesk:Extrabold',sans-serif] h-[23px] leading-[24px] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[0.26px] w-[134.843px]">Learn more about us</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0">
      <div className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.28px] w-[227px] whitespace-pre-wrap">
        <p className="leading-[16.8px] mb-0">{`Lone Star Tile isn't just another tile contractor—we're your partners in bringing vision to reality. As a woman-owned business serving San Antonio and throughout Texas, we've built our reputation on quality work delivered on time, every time. `}</p>
        <p className="leading-[16.8px] mb-0">&nbsp;</p>
        <p className="leading-[16.8px]">{`From the sleek floors of commercial institutions to custom kitchens, bathrooms, and floors in San Antonio's most prestigious neighborhoods, we approach every project with impeccable craftsmanship, honest communication, and results that last.`}</p>
      </div>
      <AboutButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[21px] items-center left-1/2 top-[-155px] w-[370px]">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[29.86px] text-black tracking-[-0.5972px] w-[370px]">{`Quality tile installation for San Antonio's finest homes and businesses`}</p>
      <div className="h-[241px] relative shrink-0 w-[304px]" data-name="Commercial Pic">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-7.25%] max-w-none top-0 w-[117.74%]" src={imgCommercialPic} />
        </div>
      </div>
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] relative shrink-0 text-[20.74px] text-black tracking-[0.4148px] w-[233px]">Where Craftsmanship Meets Texas Pride</p>
      <Frame3 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[362px] items-center relative shrink-0 w-[233px]" data-name="Text 1">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] top-[1013px] w-[314px]">
      <Text />
    </div>
  );
}

function StarRating() {
  return (
    <div className="col-1 content-stretch flex items-center ml-[34px] mt-[23px] pr-[8px] relative row-1" data-name="Star Rating">
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Review1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Review 2">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] ml-[34px] mt-0 relative row-1 text-[20.74px] text-black tracking-[0.4148px] whitespace-nowrap">Marcus T.</p>
      <StarRating />
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] ml-0 mt-[65px] relative row-1 text-[12px] text-black tracking-[0.24px] w-[154px]">{`"We've used them on three major commercial projects now. Always on time, professional, and the quality is consistently excellent. Our go-to for tile work."`}</p>
    </div>
  );
}

function Review2() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col items-start pb-[22px] pt-[21px] px-[36px] relative shrink-0 size-[226px]" data-name="Review 3">
      <div aria-hidden="true" className="absolute border-8 border-[#d8d0b9] border-solid inset-0 pointer-events-none" />
      <Review1 />
    </div>
  );
}

function StarRating1() {
  return (
    <div className="col-1 content-stretch flex items-center ml-[34px] mt-[23px] pr-[8px] relative row-1" data-name="Star Rating">
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Review3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Review 2">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] ml-[34px] mt-0 relative row-1 text-[20.74px] text-black tracking-[0.4148px] whitespace-nowrap">Marcus T.</p>
      <StarRating1 />
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] ml-0 mt-[65px] relative row-1 text-[12px] text-black tracking-[0.24px] w-[154px]">{`"We've used them on three major commercial projects now. Always on time, professional, and the quality is consistently excellent. Our go-to for tile work."`}</p>
    </div>
  );
}

function Review() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col items-start pb-[22px] pt-[21px] px-[36px] relative shrink-0 size-[226px]" data-name="Review 1">
      <div aria-hidden="true" className="absolute border-8 border-[#d8d0b9] border-solid inset-0 pointer-events-none" />
      <Review3 />
    </div>
  );
}

function StarRating2() {
  return (
    <div className="col-1 content-stretch flex items-center ml-[34px] mt-[23px] pr-[8px] relative row-1" data-name="Star Rating">
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[26px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Review5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Review 2">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] ml-[34px] mt-0 relative row-1 text-[20.74px] text-black tracking-[0.4148px] whitespace-nowrap">Marcus T.</p>
      <StarRating2 />
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] ml-0 mt-[65px] relative row-1 text-[12px] text-black tracking-[0.24px] w-[154px]">{`"We've used them on three major commercial projects now. Always on time, professional, and the quality is consistently excellent. Our go-to for tile work."`}</p>
    </div>
  );
}

function Review4() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col items-start pb-[22px] pt-[21px] px-[36px] relative shrink-0 size-[226px]" data-name="Review 2">
      <div aria-hidden="true" className="absolute border-8 border-[#d8d0b9] border-solid inset-0 pointer-events-none" />
      <Review5 />
    </div>
  );
}

function ReviewsTop() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Reviews Top">
      <Review2 />
      <Review />
      <Review4 />
    </div>
  );
}

function Reviews() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[-155px] top-[1702px]" data-name="Reviews">
      <ReviewsTop />
    </div>
  );
}

function FtPic() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Ft. Pic 1">
      <div className="bg-[#d9d9d9] h-[205.461px] shrink-0 w-[281.372px]" />
    </div>
  );
}

function FtPic1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[93px] relative shrink-0" data-name="Ft. Pic 2">
      <div className="bg-[#d9d9d9] h-[257.794px] shrink-0 w-[217px]" />
    </div>
  );
}

function FtPic2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Ft. Pic 3">
      <div className="bg-[#d9d9d9] h-[184.578px] shrink-0 w-[281px]" />
    </div>
  );
}

function Pics() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-end left-[calc(37.5%+31.63px)] top-[2176px] w-[330px]" data-name="Pics">
      <FtPic />
      <FtPic1 />
      <FtPic2 />
    </div>
  );
}

function AboutButton1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="about button">
      <div className="bg-[#af2828] col-1 h-[23px] ml-0 mt-0 rounded-[40px] row-1 w-[150px]" data-name="Button 1" />
      <p className="col-1 font-['Cabinet_Grotesk:Extrabold',sans-serif] h-[23px] leading-[24px] ml-[8px] mt-0 not-italic relative row-1 text-[13px] text-center text-white tracking-[0.26px] w-[134.843px]">View residential work</p>
    </div>
  );
}

function AboutButton2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="about button">
      <div className="bg-[#af2828] col-1 h-[23px] ml-0 mt-0 rounded-[40px] row-1 w-[154px]" data-name="Button 1" />
      <p className="col-1 font-['Cabinet_Grotesk:Extrabold',sans-serif] leading-[24px] ml-[8px] mt-0 not-italic relative row-1 text-[13px] text-center text-white tracking-[0.26px] whitespace-nowrap">View commercial work</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[15px] top-[2984.02px] w-[297px]">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[29.86px] text-black tracking-[-0.5972px] w-[186px]">Discover Our Expertise</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] min-w-full relative shrink-0 text-[14px] text-black tracking-[0.28px] w-[min-content]">{`From historic renovations to custom builds throughout San Antonio, we transform homes with expert tile installation. Homeowners trust us to guide them through every decision; from selecting the perfect backsplash to coordinating colors that complement their style. Architects value our precision in executing their residential designs with meticulous attention to detail. Whether it's a spa-like master bath or a stunning kitchen, we bring craftsmanship and care to every home project.`}</p>
      <AboutButton1 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] min-w-full relative shrink-0 text-[14px] text-black tracking-[0.28px] w-[min-content]">{`General contractors across Texas rely on Lone Star Tile for commercial projects that demand reliability, speed, and quality. From polished corporate spaces to multi-location rollouts for McDonald's, Circle K, and Valero, we deliver on-schedule installations that pass inspection the first time. Commercial architects trust our ability to execute complex specifications while maintaining design integrity. Whether it's high-traffic retail, restaurant kitchens, or corporate headquarters, we coordinate seamlessly with your timeline and other trades—every single time.`}</p>
      <AboutButton2 />
    </div>
  );
}

function Credits() {
  return (
    <div className="-translate-x-1/2 absolute contents font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-1/2 text-[8px] text-black top-[4144.02px] tracking-[0.8px] whitespace-nowrap" data-name="Credits">
      <p className="absolute left-[calc(25%+8.75px)] top-[4155.02px]">© 2026 Lone Star Tile. All rights reserved</p>
      <p className="absolute left-[calc(50%-55.5px)] top-[4144.02px]">CREATED BY HENRY NEFF</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal gap-[16px] items-start justify-center left-[calc(87.5%-10.38px)] text-[12px] top-[3886.02px] tracking-[0.24px]">
      <p className="relative shrink-0">Residential</p>
      <p className="relative shrink-0">Commercial</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Company() {
  return (
    <div className="-translate-x-1/2 absolute contents leading-[16.8px] left-[calc(87.5%-10.38px)] text-black top-[3840.02px] whitespace-nowrap" data-name="Company">
      <Frame4 />
      <p className="absolute font-['Switzer_Variable:Bold',sans-serif] font-bold left-[calc(87.5%-44.88px)] text-[14px] top-[3840.02px] tracking-[0.28px]">company</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="absolute contents leading-[16.8px] left-[18px] text-black top-[3976.02px] whitespace-nowrap" data-name="Socials">
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal left-[18px] text-[12px] top-[4019.02px] tracking-[0.24px]">INSTAGRAM: @blank12</p>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal left-[18px] text-[12px] top-[4063.02px] tracking-[0.24px]">LinkedIn: @LoneStarTile</p>
      <p className="absolute font-['Switzer_Variable:Bold',sans-serif] font-bold left-[18px] text-[14px] top-[3976.02px] tracking-[0.28px]">socials</p>
    </div>
  );
}

function Contacts() {
  return (
    <div className="absolute contents leading-[16.8px] left-[18px] text-black top-[3840.02px] whitespace-nowrap" data-name="Contacts">
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal left-[18px] text-[12px] top-[3927.02px] tracking-[0.24px]">PHONE: +1 123-456-7890</p>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal left-[18px] text-[12px] top-[3883.02px] tracking-[0.24px]">EMAIL: blank12@gmail.com</p>
      <p className="absolute font-['Switzer_Variable:Bold',sans-serif] font-bold left-[18px] text-[14px] top-[3840.02px] tracking-[0.28px]">contacts</p>
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[3735.02px]" data-name="Footer Info">
      <Credits />
      <Company />
      <Socials />
      <Contacts />
      <div className="absolute h-[60px] left-[6px] top-[3748.02px] w-[96px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] border-black border-solid border-t-2 h-[7px] left-0 top-[3735.02px] w-[393px]" data-name="Footer bar" />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="Landing">
      <div className="absolute h-[854px] left-[0.24px] top-0 w-[393px]" data-name="Photo">
        <img alt="" className="absolute block max-w-none size-full" height="854" src={imgPhoto} width="393" />
      </div>
      <p className="-translate-x-1/2 absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[16.8px] left-1/2 text-[12px] text-center text-white top-[820px] tracking-[0.24px] w-[351px]">(Scroll Down)</p>
      <Nav />
      <Frame1 />
      <Reviews />
      <div className="absolute font-['Cabinet_Grotesk:Black',sans-serif] leading-[0] left-[9px] not-italic text-[29.86px] text-black top-[1963px] tracking-[-0.5972px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`Let our work `}</p>
        <p className="leading-[normal] whitespace-pre">speak for itself</p>
      </div>
      <p className="-translate-x-full absolute font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[28.65px] left-[calc(50%+172.5px)] text-[20.74px] text-black text-right top-[2069px] tracking-[0.4148px] whitespace-nowrap">Here’s a preview</p>
      <Pics />
      <Frame />
      <FooterInfo />
    </div>
  );
}