import { Text } from "@chakra-ui/react"
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline"
export default function Teste() {  
    return(
        <main>
<TimelineRoot>
<TimelineItem>
        <TimelineConnector>
          
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle>Product Shipped</TimelineTitle>
          <TimelineDescription>13th May 2021</TimelineDescription>
          <Text textStyle="sm">
            We shipped your product via <strong>FedEx</strong> and it should
            arrive within 3-5 business days.
          </Text>
        </TimelineContent>
      </TimelineItem>

    </TimelineRoot>         
</main>
    );
}