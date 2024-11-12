import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const AlertDialogComponent = () => {
  return (
    <div className="flex flex-col gap-5">
      <a target="_blank" href="https://ui.shadcn.com/docs/components/alert-dialog" className="font-bold underline cursor-pointer">Alert Dialog</a>
      <AlertDialog>
        <AlertDialogTrigger className="bg-black text-white py-2 px-4 rounded-md">
          Show Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Lorem ipsum dolor sit amet.</AlertDialogTitle>
            <AlertDialogDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              ducimus animi reiciendis, iure mollitia iste.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertDialogComponent;
