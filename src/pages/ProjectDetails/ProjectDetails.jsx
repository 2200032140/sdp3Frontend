import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { DialogTitle } from "@radix-ui/react-dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import Navbar from "../Navbar/Navbar";

export default function ProjectDetails() {
  const handleProjectInvitation = () => {};
  return (
    <div className="php">
      <Navbar />
      <div className="mt-5 lg:px-10">
        <div className="lg:flex  gap-5 justify-between pb-4">
          <ScrollArea className="h-[89vh]  lg:w-[69%] pr-2 ">
            <div
              className=" p w-full pr-8 pl-8 "
              style={{ paddingRight: "8px", paddingLeft: "8px" }}
            >
              <h1
                className="text-lg font-smeibold pb-5"
                style={{ color: "#000" }}
              >
                Student Project Management System Using React
              </h1>
              <div className="space-y-5 pb-10 ">
                <p className="w-full  text-black-400 text-sm">
                  A student project management system involves planning,
                  executing, and overseeing the development and operation of an
                  online store. Key aspects include managing inventory, payment
                  integration, customer service, and marketing strategies. It
                  ensures smooth logistics, secure transactions, and
                  user-friendly experiences. Tools like project management
                  software, CMS platforms, and analytics help monitor progress
                  and performance.
                </p>
                <div style={{ color: "#000" }} className="flex">
                  <p className="w-36">Project Lead :</p>
                  <p>Rajesh Kumar</p>
                </div>
                <div className="flex">
                  <p style={{ color: "#000" }} className="w-36">
                    Members :
                  </p>
                  <div className="flex items-center gap-2">
                    {[1, 1].map((item) => (
                      <Avatar key={item} className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger style={{ marginLeft: "35px" }}>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleProjectInvitation}
                      >
                        <span>Invite</span>
                        <PlusIcon className="w-3 h-3 ml-3" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent style={{ backgroundColor: "#171717f4" }}>
                      <DialogHeader>
                        <DialogTitle style={{ color: "#000" }}>
                          Invite user
                        </DialogTitle>
                        <InviteUserForm />
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
                <div style={{ color: "#000" }} className="flex">
                  <p className="w-36">Category :</p>
                  <p>Fullstack</p>
                </div>
                <div className="flex">
                  <p style={{ color: "#000" }} className="w-36">
                    Status :
                  </p>
                  <Badge style={{ background: "black" }}>
                    <p>Pending</p>
                  </Badge>
                </div>
              </div>

              <section className="pr-100">
                <p
                  style={{ color: "#000" }}
                  className="tasksFont py-5 border-b text-lg -tracking-wider "
                >
                  Tasks
                </p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList status="pending" title="Todo List" />
                  <IssueList status="in_progress" title="In progress" />
                  <IssueList status="done" title="Done" />
                </div>
              </section>
            </div>
          </ScrollArea>
          {/* <div className="lg:w-[30%] lg:h-[100%] rounded-md sticky right-5 top-12">
            <ChatBox/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
