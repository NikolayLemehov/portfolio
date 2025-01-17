import weatherScreen from "@assets/weather.jpg";

type Props = {
  type: "box" | "detail";
};

export const ProjectCard = ({ type }: Props) => {
  return (
    <div>
      <img src={weatherScreen} width="100" height="100" alt="screen" />
      ProjectCard type:{type}
    </div>
  );
};
