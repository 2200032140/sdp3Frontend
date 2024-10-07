// import { Section } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { Link } from "lucide-react";
import { useState } from "react";
import ProjectCard from "../Project/ProjectCard";
// import SplineRocket from "../custom/SplineRocket.jsx"
// import { relative } from "path";
// import { Link } from "lucide-react";
// import { Link } from "lucide-react";

export const tags = [
  "All",
  "React",
  "Next js",
  "Spring boot",
  "MySql",
  "Node js",
  "Express js",
  "Python",
  "Flask",
  "Django",
];

export default function ProjectList() {
  const [keyword, setKeyword] = useState("");

  const handleFilterChange = (section, value) => {
    console.log("value", value, section);
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <div
        className="particle relative px-5 lg:px-0 justify-center lg:flex gap-5 py-5"
        style={{
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
          alignItems: "",
          margin: "0px 10px",
          marginRight: "1000px",
        }}
      >
        <section
          className="projectListSection w-full lg:w-[48rem]"
          style={{ position: "relative", marginLeft: "320px" }}
        >
          <ScrollArea className="space-y h-[88vh]">
            <div className="flex gap-2 items-center pb-5 justify-between">
              <div className="relative p-0 w-full mainSearch">
                <Input
                  onChange={handleSearchChange}
                  placeholder="search project"
                  className="40% px-9 "
                />
                <MagnifyingGlassIcon className="absolute top-3 left-4" />
              </div>
            </div>
            <div>
              <div className="space-y-5 min-h-[74vh]">
                {keyword
                  ? [1, 1, 1].map((item) => <ProjectCard key={item} />)
                  : [1, 1, 1, 1, 1, 1, 1].map((item) => (
                      <ProjectCard key={item} />
                    ))}
              </div>
            </div>
          </ScrollArea>
        </section>
      </div>
    </>
  );
}
