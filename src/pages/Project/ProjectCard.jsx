import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { DropdownMenu, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export default function ProjectCard() {
  const navigate = useNavigate();
  return (
    <Card className="p-5  w-full h-[600px] lg:max-w-3xl">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1
                onClick={() => navigate("/project/3")}
                className="cursor-pointer font-bold text-black text-lg"
              >
                Student Project Management
              </h1>
              <DotFilledIcon />
              <p className="text-sm text-gray-400">Fullstack</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="border-none">
                  <Button variant="ghost" size="icon" className="border-none">
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p
            className="flex  text-gray-500 text-sm"
            style={{ textAlign: "left" }}
          >
            A Student project management system involves planning, executing,
            and overseeing the development and operation of an online store. Key
            aspects include managing inventory, payment integration, customer
            service, and marketing strategies. It ensures smooth logistics,
            secure transactions, and user-friendly experiences. Tools like
            project management software, CMS platforms, and analytics help
            monitor progress and performance.
          </p>
          <img
            src="https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png"
            alt="img"
          />
        </div>
      </div>
    </Card>
  );
}
