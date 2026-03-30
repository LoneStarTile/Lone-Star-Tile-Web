import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";
import imgStar1 from "figma:asset/51d3a45f3e71b06a862572a28cbf214fd43b2333.png";
import imgPhoto from "figma:asset/faf500b9452a4888d24838c5d28723781c96a6d1.png";
import imgCommercialPic from "figma:asset/7e9192c43542e58faa7d59e306090b76a167c788.png";

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

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-[calc(50%-8px)] text-black top-[6356px]">
      <Contacts />
      <Socials />
      <Company />
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="absolute contents left-0 top-[6317px]" data-name="Footer Info">
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[calc(83.33%+116px)] text-[8px] text-black top-[6554px] tracking-[0.8px] whitespace-nowrap">CREATED BY HENRY NEFF</p>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[11px] text-[10px] text-black top-[6552px] tracking-[1px] whitespace-nowrap">© 2026 Lone Star Tile. All rights reserved</p>
      <Frame4 />
      <div className="absolute h-[154px] left-[32px] top-[6323.69px] w-[240px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] border-black border-solid border-t-2 h-[7px] left-0 top-[6317px] w-[1512px]" data-name="Footer bar" />
    </div>
  );
}

function FtPic2() {
  return <div className="absolute h-[335px] left-[calc(16.67%-15px)] top-[4620px] w-[510px]" data-name="Ft. Pic 3" />;
}

function FtPic1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[calc(58.33%+12px)] top-[3885px] w-[383px]" data-name="Ft. Pic 2">
      <div className="bg-[#d9d9d9] h-[455px] shrink-0 w-full" />
    </div>
  );
}

function FtPic() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[calc(25%+4px)] top-[3369px] w-[619px]" data-name="Ft. Pic 1">
      <div className="bg-[#d9d9d9] h-[452px] shrink-0 w-full" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(16.67%+4px)] top-[3369px]">
      <div className="absolute bg-[#d9d9d9] h-[335px] left-[calc(16.67%+4px)] top-[4404px] w-[510px]" />
      <FtPic1 />
      <FtPic />
    </div>
  );
}

function TextParagraph() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Text Paragraph">
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] ml-0 mt-0 relative row-1 text-[24px] text-black tracking-[0.48px] w-[651px]">{`From historic renovations to custom builds throughout San Antonio, we transform homes with expert tile installation. Homeowners trust us to guide them through every decision; from selecting the perfect backsplash to coordinating colors that complement their style. Architects value our precision in executing their residential designs with meticulous attention to detail. Whether it's a spa-like master bath or a stunning kitchen, we bring craftsmanship and care to every home project.`}</p>
    </div>
  );
}

function WorkButton() {
  return (
    <div className="bg-[#af2828] content-stretch flex h-[44px] items-center justify-center px-[12px] py-[10px] relative rounded-[40px] shrink-0 w-[266px]" data-name="work button">
      <p className="font-['Cabinet_Grotesk:Extrabold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.48px] whitespace-nowrap">View residential work</p>
    </div>
  );
}

function ResidentialText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[651px]" data-name="Residential Text">
      <TextParagraph />
      <WorkButton />
    </div>
  );
}

function WorkButton1() {
  return (
    <div className="bg-[#af2828] content-stretch flex h-[44px] items-center justify-center pl-[17px] pr-[16px] py-[10px] relative rounded-[40px] shrink-0 w-[287px]" data-name="work button">
      <p className="font-['Cabinet_Grotesk:Extrabold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.48px] whitespace-nowrap">View commercial work</p>
    </div>
  );
}

function CommercialParagraph() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[652px]" data-name="Commercial Paragraph">
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] min-w-full relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[min-content]">{`General contractors across Texas rely on Lone Star Tile for commercial projects that demand reliability, speed, and quality. From polished corporate spaces to multi-location rollouts for franchise businesses, we deliver on-schedule installations that pass inspection the first time. Commercial architects trust our ability to execute complex specifications while maintaining design integrity. Whether it's high-traffic retail, restaurant kitchens, or corporate headquarters, we coordinate seamlessly with your timeline and other trades—every single time.`}</p>
      <WorkButton1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[calc(8.33%+2px)] top-[4995px] w-[668px]">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] h-[166px] leading-[normal] min-w-full not-italic relative shrink-0 text-[67px] text-black tracking-[-1.34px] w-[min-content]">Discover Our Expertise</p>
      <ResidentialText />
      <CommercialParagraph />
    </div>
  );
}

function StarRating() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Star Rating">
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Review() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col gap-[24px] h-[440px] items-center pb-[106px] pl-[57px] pr-[48px] pt-[34px] relative shrink-0 w-[540px]" data-name="Review 1">
      <div aria-hidden="true" className="absolute border-15 border-[#d8d0b9] border-solid inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] whitespace-nowrap">Ysa Maldonado</p>
      <StarRating />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black text-center tracking-[0.48px] w-[435px]">David and Faye set the bar high... beautiful patterns and functional design effortlessly. Great communication and professional work, top notch!</p>
    </div>
  );
}

function StarRating1() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Star Rating">
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Review4() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col gap-[24px] h-[440px] items-center pb-[70px] pl-[57px] pr-[48px] pt-[34px] relative shrink-0 w-[540px]" data-name="Review 5">
      <div aria-hidden="true" className="absolute border-15 border-[#d8d0b9] border-solid inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] whitespace-nowrap">Mark Fassold</p>
      <StarRating1 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black text-center tracking-[0.48px] w-[435px]">I hired Lone Star Tile to tile my bathroom, and I could not be happier with the result. The workmanship is outstanding. The tile lines are clean and straight, the cuts are precise, and the entire space looks sharp.</p>
    </div>
  );
}

function StarRating2() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Star Rating">
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Review1() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col gap-[24px] h-[440px] items-center pb-[142px] pl-[56px] pr-[49px] pt-[34px] relative shrink-0 w-[540px]" data-name="Review 2">
      <div aria-hidden="true" className="absolute border-15 border-[#d8d0b9] border-solid inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] whitespace-nowrap">Tracey Smith</p>
      <StarRating2 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black text-center tracking-[0.48px] w-[435px]">Lone Star Tile installed wood look tile and remodeled two bathrooms... done quickly, professionally, and I am very pleased with it!</p>
    </div>
  );
}

function StarRating3() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Star Rating">
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Review2() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col gap-[19px] h-[440px] items-center pb-[115px] pl-[57px] pr-[48px] pt-[34px] relative shrink-0 w-[540px]" data-name="Review 3">
      <div aria-hidden="true" className="absolute border-15 border-[#d8d0b9] border-solid inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black tracking-[0.64px] whitespace-nowrap">Bar S Customs</p>
      <StarRating3 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] text-black text-center tracking-[0.48px] w-[435px]">Lone Star Tile has been an outstanding trade partner... David and his team consistently deliver high-quality workmanship, professionalism, and dependable service.</p>
    </div>
  );
}

function StarRating4() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Star Rating">
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
      <div className="mr-[-8px] relative shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Review3() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col gap-[7px] h-[440px] items-center pb-[41px] pt-[34px] px-[47px] relative shrink-0 w-[540px]" data-name="Review 4">
      <div aria-hidden="true" className="absolute border-15 border-[#d8d0b9] border-solid inset-0 pointer-events-none" />
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-black text-center tracking-[0.64px] whitespace-nowrap">Prime Construction Services</p>
      <StarRating4 />
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal h-[278px] leading-[36px] relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[435px]">These guys do an amazing job... always on time and do quality work. I would definitely recommend them for any tile work!</p>
    </div>
  );
}

function ReviewsUpper() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Reviews Upper">
      <Review />
      <Review4 />
      <Review1 />
      <Review2 />
      <Review3 />
    </div>
  );
}

function Reviews() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[2468px]" data-name="Reviews">
      <ReviewsUpper />
    </div>
  );
}

function AboutButton() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="about button">
      <div className="bg-[#af2828] col-1 h-[44px] ml-0 mt-0 rounded-[40px] row-1 w-[269px]" data-name="Button 1" />
      <p className="col-1 font-['Cabinet_Grotesk:Extrabold',sans-serif] leading-[24px] ml-[16px] mt-[10px] not-italic relative row-1 text-[24px] text-center text-white tracking-[0.48px] w-[237px]">Learn more about us</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] relative shrink-0">
      <div className="font-['Switzer_Variable:Regular',sans-serif] font-normal relative shrink-0 text-[24px] text-black tracking-[0.48px] w-[533px] whitespace-pre-wrap">
        <p className="leading-[36px] mb-0">{`Lone Star Tile isn't just another tile contractor—we're your partners in bringing vision to reality. As a woman-owned business serving San Antonio and throughout Texas, we've built our reputation on quality work delivered on time, every time. `}</p>
        <p className="leading-[36px] mb-0">&nbsp;</p>
        <p className="leading-[36px]">{`From the sleek floors of commercial institutions to custom kitchens, bathrooms, and floors in San Antonio's most prestigious neighborhoods, we approach every project with impeccable craftsmanship, honest communication, and results that last.`}</p>
      </div>
      <AboutButton />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[533px]">
      <div className="aspect-[525/416] relative shrink-0 w-full" data-name="Commercial Pic">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-7.25%] max-w-none top-0 w-[117.74%]" src={imgCommercialPic} />
        </div>
      </div>
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold h-[70px] leading-[48px] min-w-full relative shrink-0 text-[32px] text-black tracking-[0.64px] w-[min-content]">Where Craftsmanship Meets Texas Pride</p>
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[67px] text-black tracking-[-1.34px] w-[1168px]">Quality tile installation for the finest homes and businesses in Texas</p>
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 top-0 w-[1512px]">
      <div className="h-[984px] relative shrink-0 w-full" data-name="Photo">
        <img alt="" className="absolute block max-w-none size-full" height="984" src={imgPhoto} width="1512" />
      </div>
      <Frame2 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute content-stretch flex font-['Switzer_Variable:Medium',sans-serif] font-medium gap-[16px] items-start leading-[normal] left-[calc(50%+100px)] text-[24px] text-white top-[51px] w-[548px] whitespace-nowrap" data-name="Nav-Bar">
      <p className="relative shrink-0">RESIDENTIAL</p>
      <p className="relative shrink-0">COMMERCIAL</p>
      <p className="relative shrink-0">ABOUT</p>
      <p className="relative shrink-0">CONTACT</p>
    </div>
  );
}

export default function LaptopPreviewLanding() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="Laptop Preview Landing">
      <FooterInfo />
      <FtPic2 />
      <Group />
      <p className="-translate-x-full absolute font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[48px] left-[calc(66.67%+396px)] text-[40px] text-black text-right top-[3165px] tracking-[0.8px] whitespace-nowrap">Here’s a Preview</p>
      <p className="absolute font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] left-[calc(8.33%-18px)] not-italic text-[67px] text-black top-[3036px] tracking-[-1.34px] whitespace-nowrap">Portfolio Highlights</p>
      <Frame />
      <Reviews />
      <Frame1 />
      <NavBar />
      <div className="absolute h-[89px] left-[32px] top-[22px] w-[143px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <p className="absolute font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] left-[calc(83.33%+61px)] text-[24px] text-white top-[936px] tracking-[0.48px] whitespace-nowrap">(Scroll Down)</p>
    </div>
  );
}