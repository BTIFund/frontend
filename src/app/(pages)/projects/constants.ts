import BTIProject1 from "../../../../public/img/bti-project-1.webp";
import BTIProject2 from "../../../../public/img/bti-project-2.webp";
import BTIProject3 from "../../../../public/img/bti-project-3.webp";

export interface ProjectCard {
  id: string;
  image: any;
  title: string;
  capacity: string;
  return: string;
  fundingPercent: number;
  funded: string;
  goal: string;
  status: 'funding' | 'active' | 'completed';
  badge: {
    text: string;
    color: string;
  };
  category: string;
  impact: string;
  location: string;
  energyFor: string;
  description?: string;
}

const projectCards: ProjectCard[] = [
    {
        id: 'project1',
        image: BTIProject1,
        title: 'Surabaya Commercial Rooftop',
        capacity: '250 kWp',
        return: '12%',
        fundingPercent: 70,
        funded: '175,000 IDRX',
        goal: '250,000 IDRX',
        status: 'funding',
        badge: { text: 'Funding: 70%', color: 'bg-yellow-500' },
        category: 'commercial',
        impact: '210 tons CO2 saved yearly',
        location: 'East Java, Indonesia',
        energyFor: '85 households',
        description: 'Commercial rooftop solar installation for shopping complex in Surabaya'
    },
    {
        id: 'project2',
        image: BTIProject2,
        title: 'Bali Resort Solar Farm',
        capacity: '500 kWp',
        return: '10%',
        fundingPercent: 45,
        funded: '225,000 IDRX',
        goal: '500,000 IDRX',
        status: 'funding',
        badge: { text: 'Funding: 45%', color: 'bg-yellow-500' },
        category: 'resort',
        impact: '450 tons CO2 saved yearly',
        location: 'Bali, Indonesia',
        energyFor: '180 households',
        description: 'Large-scale solar installation for eco-friendly resort in Bali'
    },
    {
        id: 'project3',
        image: BTIProject3,
        title: 'Jakarta Office Complex',
        capacity: '350 kWp',
        return: '11.5%',
        fundingPercent: 100,
        funded: '400,000 IDRX',
        goal: '400,000 IDRX',
        status: 'active',
        badge: { text: 'Active', color: 'bg-green-500' },
        category: 'office',
        impact: '320 tons CO2 saved yearly',
        location: 'Jakarta, Indonesia',
        energyFor: '125 households',
        description: 'Modern office complex utilizing solar power in Jakarta CBD'
    },
    {
        id: 'project4',
        image: BTIProject1,
        title: 'Bandung Industrial Park',
        capacity: '750 kWp',
        return: '13%',
        fundingPercent: 25,
        funded: '200,000 IDRX',
        goal: '800,000 IDRX',
        status: 'funding',
        badge: { text: 'Funding: 25%', color: 'bg-yellow-500' },
        category: 'industrial',
        impact: '680 tons CO2 saved yearly',
        location: 'West Java, Indonesia',
        energyFor: '300 households',
        description: 'Large industrial park solar installation in Bandung'
    },
    {
        id: 'project5',
        image: BTIProject2,
        title: 'Medan Shopping Mall',
        capacity: '400 kWp',
        return: '11%',
        fundingPercent: 100,
        funded: '450,000 IDRX',
        goal: '450,000 IDRX',
        status: 'completed',
        badge: { text: 'Completed', color: 'bg-blue-500' },
        category: 'commercial',
        impact: '350 tons CO2 saved yearly',
        location: 'North Sumatra, Indonesia',
        energyFor: '150 households',
        description: 'Shopping mall rooftop solar project in Medan city center'
    },
    {
        id: 'project6',
        image: BTIProject3,
        title: 'Yogyakarta University Campus',
        capacity: '300 kWp',
        return: '10.5%',
        fundingPercent: 85,
        funded: '340,000 IDRX',
        goal: '400,000 IDRX',
        status: 'funding',
        badge: { text: 'Funding: 85%', color: 'bg-yellow-500' },
        category: 'education',
        impact: '250 tons CO2 saved yearly',
        location: 'Yogyakarta, Indonesia',
        energyFor: '110 households',
        description: 'University campus-wide solar installation project'
    }
];

export { projectCards };