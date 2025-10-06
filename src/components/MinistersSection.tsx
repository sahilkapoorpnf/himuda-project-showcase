import { Card } from "@/components/ui/card";
import sukhvinderSingh from "@/assets/sukhvinder-singh.jpg";
import rajeshDharmani from "@/assets/rajesh-dharmani.jpg";
import yashwantChhajta from "@/assets/yashwant-chhajta.jpg";
import deveshKumar from "@/assets/devesh-kumar.jpg";

export const MinistersSection = () => {
  const ministers = [
    {
      name: "Shri Sukhvinder Singh",
      designation: "Hon'ble Chief Minister",
      department: "",
      image: sukhvinderSingh
    },
    {
      name: "Sh. Rajesh Dharmani",
      designation: "Hon'ble Minister",
      department: "TCP, Housing, Technical Education",
      image: rajeshDharmani
    },
    {
      name: "Er. Yashwant Chhajta",
      designation: "Vice Chairman",
      department: "HIMUDA",
      image: yashwantChhajta
    },
    {
      name: "Sh. Devesh Kumar, IAS",
      designation: "Pr. Secretary, Housing",
      department: "Govt. of HP",
      image: deveshKumar
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-2">Leadership</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Government of Himachal Pradesh</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {ministers.map((minister, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={minister.image}
                  alt={minister.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="p-6 text-center border-t-4 border-primary">
                <h3 className="text-lg font-bold text-foreground mb-1">{minister.name}</h3>
                <p className="text-sm font-semibold text-primary mb-1">{minister.designation}</p>
                <p className="text-xs text-muted-foreground">{minister.department}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
