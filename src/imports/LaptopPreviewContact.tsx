import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";

function Email() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Email">
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] ml-0 mt-0 relative row-1 text-[32px] tracking-[0.64px] whitespace-nowrap">Email</p>
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] ml-0 mt-[36px] relative row-1 text-[16px] tracking-[0.32px] w-[210.64px]">EMAIL: blank12@gmail.com</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Phone">
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] ml-0 mt-[31px] relative row-1 text-[16px] tracking-[0.32px] whitespace-nowrap">+1 123-456-7890</p>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] ml-0 mt-0 relative row-1 text-[32px] tracking-[0.64px] w-[111.338px]">Phone</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Socials">
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] ml-0 mt-[31px] relative row-1 text-[16px] tracking-[0.32px] whitespace-nowrap">INSTAGRAM: @blank12</p>
      <p className="col-1 font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] ml-0 mt-[67px] relative row-1 text-[16px] tracking-[0.32px] w-[183.558px]">LinkedIn: @LoneStarTile</p>
      <p className="col-1 font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[48px] ml-0 mt-0 relative row-1 text-[32px] tracking-[0.64px] w-[111.338px]">socials</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start leading-[0] left-[calc(16.67%-17px)] text-black top-[476px] w-[210.64px]">
      <Email />
      <Phone />
      <Socials />
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

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(50%+10px)] text-black top-[462px] w-[650px]">
      <p className="font-['Switzer_Variable:Extrabold',sans-serif] font-extrabold leading-[48px] min-w-full relative shrink-0 text-[40px] tracking-[0.8px] w-[min-content]">Ready to bring your vision to life?</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[24px] tracking-[0.48px] w-[490px]">{`From the first consultation to the final grout line, we're with you every step of the way. Whether you're a homeowner dreaming of the perfect kitchen or a contractor managing a commercial project, Lone Star Tile delivers quality craftsmanship, transparent communication, and results that exceed expectations. Contact us today for your free project estimate.`}</p>
    </div>
  );
}

export default function LaptopPreviewContact() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="Laptop Preview Contact">
      <Frame />
      <div className="absolute bg-[rgba(217,217,217,0)] border-black border-solid border-t-2 h-[604px] left-0 top-[376px] w-[1512px]" data-name="Section with divider line" />
      <p className="absolute font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] left-[calc(50%-716px)] not-italic text-[112px] text-black top-[239px] tracking-[-2.24px] whitespace-nowrap">Let’s Talk About Your Project</p>
      <NavBar />
      <div className="absolute h-[89px] left-[32px] top-[22px] w-[143px]" data-name="Logo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}