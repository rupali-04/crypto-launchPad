import { Heading,Flex,Text,Spacer } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Tooltip, Legend  } from "recharts";

const ProjectMetrics = () =>{
    const COLORS = ["#0A134B","#5586B4","#28659D","#58AFFF","#41A3FD","#2A80CF","#4D7294","#5586B5"];
    const pieData = [
       {
          name: "Reserved for web3Games chain",
          value: 30
       },
       {
          name: "Ecosystem",
          value: 25
       },
       {
          name: "Team",
          value: 20
       },
       {
          name: "Seed Round",
          value: 10
       },
       {
          name: "Private Round",
          value: 10
       },
       {
          name: "Advisors",
          value: 3
       },
       {
          name: "Public Sale(SHO)",
          value: 1
       },
       {
          name: "Airdrop (For NFT card owners)",
          value: 1
       }
    ];
   
    return(<>
    <Flex direction="column" >
        <Flex direction="column" ml="7rem" textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize="24px">Documented token distribution</Text>
        <Text color={"gray"}>Data provided by project</Text>
          <PieChart width={730} height={300} color="black">
      <Pie
         data={pieData}
         color="#black"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         innerRadius="20"
         fill="#8884d8"
      >
         {pieData.map((entry, index) => (
            <Cell
                
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>
     <Tooltip/>
      <Legend />
      </PieChart>
      </Flex>
      <Heading mt="1rem" size={"lg"} mb="1rem">Sales round details</Heading>
      <Flex>
        <Text w="150px"></Text>
        <Text w="150px" color={"gray.500"}>Price</Text>
        <Text w="150px" color={"gray.500"}>Fundraised</Text>
        <Text w="350px" color={"gray.500"}>Look-up</Text>
      </Flex>
      <Flex mt="1rem" bg="gray.100">
        <Text w="150px">Seed Round</Text>
        <Text w="150px">$0.016</Text>
        <Text w="150px">1,600,000</Text>
        <Text w="350px">5% at TGE; 90 days cliff; then monthly vesting over 24 months.</Text>
      </Flex>
      <Flex>
        <Text w="150px">Private Round</Text>
        <Text w="150px">$0.024</Text>
        <Text w="150px">2,400,000</Text>
        <Text w="350px">10% at TGE; 90 days cliff; then monthly vesting over 24 months.</Text>
      </Flex>
      <Flex bg="gray.100">
        <Text w="150px">Public sale (SHO)</Text>
        <Text w="150px">$0.025</Text>
        <Text w="150px">250,000</Text>
        <Text w="350px">20% at TGE; 90 days cliff; then monthly vesting over 12 months.</Text>
      </Flex>
      
      </Flex>
    </>)
}

export default ProjectMetrics;