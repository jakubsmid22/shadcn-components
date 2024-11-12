import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const DialogComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/dialog"
        className="font-bold underline cursor-pointer"
      >
        Dialog
      </a>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Show Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Link</DialogTitle>
          </DialogHeader>
            <div className="flex gap-12 mb-3">
              <label htmlFor="url">URL</label>
              <input
                className="border-b-2 border-black w-full focus:outline-none"
                type="url"
                id="url"
                placeholder="http://google.com"
              />
            </div>
            <div className="flex gap-12">
              <label htmlFor="text">Text</label>
              <div className="w-full space-y-5">
                <input
                  className="border-b-2 border-black w-full focus:outline-none"
                  type="text"
                  id="text"
                  placeholder="Google"
                />
                <div className="flex items-center gap-3">
                  <Checkbox id="checkbox" />
                  <label htmlFor="checkbox">Open in new window</label>
                </div>
              </div>
            </div>
          <DialogFooter className="mt-5">
            <Button className="w-1/2" variant="outline" >Add</Button>
            <Button className="w-1/2">Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
