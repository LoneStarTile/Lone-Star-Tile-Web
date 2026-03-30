import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.png";

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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[29.86px] tracking-[-0.5972px] w-[288px]">Ready to bring your vision to life?</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">{`From the first consultation to the final grout line, we're with you every step of the way. Whether you're a homeowner dreaming of the perfect kitchen or a contractor managing a commercial project, Lone Star Tile delivers quality craftsmanship, transparent communication, and results that exceed expectations. Contact us today for your free project estimate.`}</p>
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full" data-name="Email">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] relative shrink-0 text-[24.88px] tracking-[0.4976px] w-full">Email</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">EMAIL: blank12@gmail.com</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[132px]" data-name="Phone">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] relative shrink-0 text-[24.88px] tracking-[0.4976px] w-full">Phone</p>
      <p className="font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">+1 123-456-7890</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal gap-[8px] items-start leading-[24px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">
      <p className="relative shrink-0 w-full">INSTAGRAM: @blank12</p>
      <p className="relative shrink-0 w-full">LinkedIn: @LoneStarTile</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[183.558px]" data-name="Socials">
      <p className="font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[34.832px] relative shrink-0 text-[24.88px] tracking-[0.4976px] w-full">socials</p>
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[210.64px]">
      <Email />
      <Phone />
      <Socials />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[50px] items-start left-[13px] text-black top-[340px] w-[330px]">
      <Frame2 />
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[13px] top-[340px]">
      <Frame1 />
    </div>
  );
}

function Credits() {
  return (
    <div className="-translate-x-1/2 absolute contents font-['Switzer_Variable:Regular',sans-serif] font-normal leading-[normal] left-[calc(37.5%+39.13px)] text-[8px] text-black top-[1130px] tracking-[0.8px] whitespace-nowrap" data-name="Credits">
      <p className="absolute left-[calc(25%-1.25px)] top-[1141px]">© 2026 Lone Star Tile. All rights reserved</p>
      <p className="absolute left-[calc(37.5%-16.38px)] top-[1130px]">CREATED BY HENRY NEFF</p>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-[#fffae7] relative size-full" data-name="Contact">
      <Nav />
      <p className="absolute font-['Cabinet_Grotesk:Black',sans-serif] leading-[normal] left-[calc(37.5%-134.38px)] not-italic text-[35.83px] text-black top-[202px] tracking-[-0.7166px] w-[263px]">Let’s Talk About Your Project</p>
      <div className="absolute bg-[rgba(217,217,217,0)] border-black border-solid border-t-2 h-[604px] left-0 top-[322px] w-[393px]" data-name="Section with divider line" />
      <Group />
      <Credits />
    </div>
  );
}