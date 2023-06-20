export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Cinta",
};

const passenger2: Passenger = {
  name: "Lola",
  children: ["Lolita", "Dani"],
};

const returnChildren = (passenger: Passenger): number => {
  if (!passenger.children) return 0;

  /* const howManyChildren = passenger.children?.length || 0; */
  const howManyChildren = passenger.children!.length;
  console.log(passenger.name, howManyChildren);
  return howManyChildren;
};

returnChildren(passenger2);
returnChildren(passenger1);
