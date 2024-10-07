import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateProjectForm from "../Project/CreateProjectForm";
import { PersonIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#e1e8ee" }} className="navbar w-screen">
      <div className="flex items-center gap-3">
        <p onClick={() => navigate("/")} className="navLogo target-container">
          GlitchWork
        </p>
        <Dialog>
          <DialogTrigger className="border-none">
            <Button
              className="textCustom target-container border-none"
              variant="ghost"
            >
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent
            style={{ backgroundColor: "#3c3c3c63", border: "none" }}
            className="dialogContent"
          >
            <DialogHeader>
              <DialogTitle style={{ color: "#e3e3e3" }}>
                Create New Project
              </DialogTitle>
              <CreateProjectForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Button style={{ marginLeft: "850px" }}>
        <>Login</>
      </Button>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-none">
            <Button
              size="icon"
              className="rounded-full border-2 border-gray-500 border-none"
            >
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>Account</p>
      </div>
    </div>
  );
}
