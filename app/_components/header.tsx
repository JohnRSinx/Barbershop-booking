import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return ( 
   <Card>
    <CardContent className="flex flexrow justify-between items-center p-5">
      <Image src="/logo.png" alt="FSW BARBER" height={18} width={120}/>
      <Button variant="outline">
        <MenuIcon size={16} />
      </Button>
    </CardContent>
   </Card>
   );
}
 
export default Header;