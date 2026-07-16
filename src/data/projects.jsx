import sekwma1 from "../assets/img/sekwma1.png";
import sekwma2 from "../assets/img/sekwma2.png";
import sekwma3 from "../assets/img/sekwma3.png";
import sekwma4 from "../assets/img/sekwma4.png";

import zoon1 from"..//assets/img/zoon1.png";
import zoon2 from"..//assets/img/zoon2.png";
import zoon3 from"..//assets/img/zoon3.png";
import zoon4 from"..//assets/img/zoon4.png";
import zoon5 from"..//assets/img/zoon5.png";


import cd1 from"..//assets/img/cd1.png";
import cd2 from"..//assets/img/cd2.png";
import cd3 from"..//assets/img/cd3.png";
import cd4 from"..//assets/img/cd4.png";
import cd5 from"..//assets/img/cd5.png";


import s1 from"..//assets/img/s1.png";
import s2 from"..//assets/img/s2.png";
import s3 from"..//assets/img/s3.png";
import s4 from"..//assets/img/s4.png";
import s5 from"..//assets/img/s5.png";

export const projects = [

  {
    id: 1,
    title: "Sekwma",
    description:
      "C# Desktop Application Developer with experience in C#. I design and develop desktop applications for client management, invoicing, and receipt processing. I also have experience with Docker and Windows virtual machines for application testing and deployment.",
    images: [
      sekwma1,
      sekwma2,
      sekwma3,
      sekwma4
    ],
    technologies: ["Windows.Forms", ".NET Framework 3.5", "Unit Testing", "SQL CE","ILSpy","Eazfuscator.NET"],
    github: "https://github.com/EfraimDeveloper",
    demo: "https://github.com/EfraimDeveloper/Sekwma/tree/main/Sekwama01"
  },

  {
    id: 2,
    title: "Zoom-startup",
    description:
      "Web-based vehicle management system developed. Includes user management, vehicle tracking, insurance management expense control, reports dynamic interface, interactive, and automated testing with PHPUnit.",
    images: [
      zoon1,
      zoon2,
      zoon3,
      zoon4,
      zoon5
 
    ],
    technologies: ["PHP", "MySQL","Bootstrap","jQuery","SweetAlert","Chart.js","cPanel"],
    github: "https://github.com/EfraimDeveloper",
    demo: "https://github.com/EfraimDeveloper/Zoom-startup.git"
  },
    {
    id: 3,
    title: "CDSOFT-Invoicing-Management-System",
    description:
      "Desktop invoicing system developed for small businesses. Includes company configuration, customer and supplier management, sales, service records, reports, barcode generation, Excel export, and local database.",
    images: [
      cd1,
      cd2,
      cd3,
      cd4,
      cd5
 
    ],
     technologies: ["C#","Windows.Forms", ".NET Framework 4.5", "", "SQL CE","SqlServer","Docker","MSTest","Inno Setup"],
    github: "https://github.com/EfraimDeveloper",
    demo: "https://github.com/EfraimDeveloper/CDSOFT---Invoicing-Management-System/tree/main/Sistema_venda"
  },
    {
    id: 4,
    title: "Training-Center-Management-System",
    description:
      "Desktop training center management system built with Windows.Forms. Features student registration, courses, enrollments, tuition payments, classrooms, reports, dashboards, and basic configuration. Uses MetroFramework, ADO.NET, DGVPrinter, and MD5",
    images: [
      s1,
      s2,
      s3,
      s4,
      s5
    ],
    technologies: ["C#", ".NET 7", "Database.Net", "SQL Server","LINQPad","Git","SSMS","xUnit"],
    github: "https://github.com/EfraimDeveloper",
    demo: "https://github.com/EfraimDeveloper/Training-Center-Management-System/tree/main/Projecto_final"
  }

];

