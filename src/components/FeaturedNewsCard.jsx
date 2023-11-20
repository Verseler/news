import featuredImg1 from "../assets/images/featuredNewsImg/image-retro-pcs.jpg";
import featuredImg2 from "../assets/images/featuredNewsImg/image-top-laptops.jpg";
import featuredImg3 from "../assets/images/featuredNewsImg/image-gaming-growth.jpg";

export default function FeaturedNewsCard(props) {
  const imgList = [featuredImg1, featuredImg2, featuredImg3];

  return (
    <li className="flex gap-2">
      <img className="object-cover w-2/5 max-h-28 lg:max-h-36" src={imgList[props.id]} />
      <div className="w-full">
        <span
          className="text-2xl font-bold text-gray-300"
          aria-label="list-count"
        >
          {props.numberCount}
        </span>
        <h3 className="my-1 font-extrabold dark:text-white">{props.title}</h3>
        <p className="text-sm text-gray-500">{props.desc}</p>
      </div>
    </li>
  );
}
