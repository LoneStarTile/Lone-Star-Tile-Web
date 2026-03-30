import imgRectangle16 from "figma:asset/36c4134fe0d47689c7e4b6553b0525dd3a544698.png";
import imgRectangle15 from "figma:asset/1387bd8803ed9d617475ab0483c38dee54ea77a1.png";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] h-[224px] shrink-0 w-[249px]" data-name="Tile Pic-3" />
      <div className="h-[358.235px] relative shrink-0 w-[605.867px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle15} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <div className="h-[476.839px] relative shrink-0 w-[427.477px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle16} />
      </div>
      <Frame1 />
    </div>
  );
}