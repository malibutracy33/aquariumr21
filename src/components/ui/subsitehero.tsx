import { SubsitesTry } from "@/lib/subsites";
import { cn } from "@/lib/utils";

export default function SubsitesHero({
  title,
  subtitle,
  id,
  color,
  imageUrl,
}: SubsitesTry) {
  return (
    <div>
      <div
        className={cn(
          "flex flex-col",
          "md:flex-row md:h-screen portrait:flew-row"
        )}
      >
        <div className="font-subsites md:max-w-[35vw] flex flex-col gap-2 flex-start z-20 justify-center">
          <div className="uppercase leading-none">
            <h3 className={`${color} text-clampPart3`}>{id}</h3>
            <h2 className="align-center text-clampPart2 md:text-[80px] portrait:max-w-[35vw]">
              {title}
            </h2>
          </div>
          <h4 className="text-clampPart3">{subtitle}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui
            eaque, reprehenderit tenetur consectetur molestias.
          </p>
        </div>
        <div
          className={cn(
            "parts-bg w-full aspect-video bg-cover bg-center bg-no-repeat z-10",
            "md:min-w-[60vw]"
          )}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    </div>
  );
}
