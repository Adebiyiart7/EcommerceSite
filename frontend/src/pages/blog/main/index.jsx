// LOCAL IMPORTS
import displayImage from "../../../assets/images/tomatoes.jpg";
import BlogCard from "../../../components/common/BlogCard";
import Button from "../../../components/common/Button";

const Main = ({ mediaQueries }) => {
  return (
    <div>
      <BlogCard
        mediaQueries={mediaQueries}
        author={"Seun"}
        date={"17 June 2022"}
        commentCount={23}
        displayImage={displayImage}
        title={
          "Preserving our fresh tomatoes organically to still remain fresh."
        }
        subTitle={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum minima molestiae provident adipisci esse vel, obcaecati quaerat sed ab eaque. Iure provident eaque ratione repellat itaque consequuntur, quasi possimus delectus!"
        }
        action={<Button text={"Read More"} altButton={true} />}
      />
      <BlogCard
        mediaQueries={mediaQueries}
        author={"Seun"}
        date={"17 June 2022"}
        commentCount={23}
        displayImage={displayImage}
        title={
          "Preserving our fresh tomatoes organically to still remain fresh."
        }
        subTitle={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum minima molestiae provident adipisci esse vel, obcaecati quaerat sed ab eaque. Iure provident eaque ratione repellat itaque consequuntur, quasi possimus delectus!"
        }
        action={<Button text={"Read More"} altButton={true} />}
      />
      <BlogCard
        mediaQueries={mediaQueries}
        author={"Seun"}
        date={"17 June 2022"}
        commentCount={23}
        displayImage={displayImage}
        title={
          "Preserving our fresh tomatoes organically to still remain fresh."
        }
        subTitle={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum minima molestiae provident adipisci esse vel, obcaecati quaerat sed ab eaque. Iure provident eaque ratione repellat itaque consequuntur, quasi possimus delectus!"
        }
        action={<Button text={"Read More"} altButton={true} />}
      />
    </div>
  );
};

export default Main;
