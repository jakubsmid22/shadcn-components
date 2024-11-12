import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/avatar"
        className="font-bold underline cursor-pointer"
      >
        Avatar
      </a>
      <Avatar>
        <AvatarImage src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?t=st=1730623515~exp=1730627115~hmac=dd9755cda68e0590334c31594ed387bcf71461fc8e768a932d6c429ecd7b25c5&w=740" />
        <AvatarFallback>PP</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarComponent;
