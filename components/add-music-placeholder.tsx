import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function MusicEmptyPlaceholder() {
  return (
    <div className="flex   shrink-0 items-center justify-center rounded-md  ">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              Add Music
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Music</DialogTitle>
              <DialogDescription>
                You can add music either by url or by name{" "}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Music URL</Label>
                <Input id="url" placeholder="https://example.com/feed.xml" />
              </div>
            </div>{" "}
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Song Name</Label>
                <Input id="url" placeholder="Song" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url">Artist Name</Label>
                <Input id="url" placeholder="Artist " />
              </div>
            </div>
            <DialogFooter>
              <Button>Import Music</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
