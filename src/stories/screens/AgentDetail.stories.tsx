import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { AgentDetail } from "../../app/screens/Agent/AgentDetail/AgentDetail";

const meta = {
  title: "screens/Agent/AgentDetail",
  component: AgentDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof AgentDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

// Mocked data
const MokedData = {
  data: {
    id: 35809,
    title: "Claude Monet",
    is_artist: true,
    birth_date: 1840,
    death_date: 1926,
    description:
      '<p>Claude Monet was a pioneer of the French artistic movement known as Impressionism. Throughout his long career, Monet portrayed the people closest to him and the places he knew best. He favored family and friends as models, often working and exhibiting alongside fellow artists. In the early years he painted the forests of Fountainbleau, Parisian boulevards, suburban villages along the Seine, seaside towns, and flowering fields, and later, after buying a house at Giverny northwest of Paris, stacks of wheat and water lilies.&nbsp;Monet was a proponent of <em>plein air </em>painting, working directly out-of-doors on compositions he would later revise and sometimes complete in his studio. He painted his beloved water lilies in Giverny, where he tended to a water garden and a small pond spanned by a Japanese footbridge. Another favorite subject, <em>meules</em> (stacks of wheat sometimes referred to as “haystacks”), were for Monet a resonant symbol of sustenance and survival—constructed by humans but created by nature.</p><p>While Monet’s series paintings appear compositionally simple, the artist adapted his palette and brushwork to each temporal situation, conveying the complexity of color, light, and texture on each canvas.&nbsp;As he described, “One instant, one aspect of nature contains it all.” Only by working in series could Monet truly render, as he put it, “what I experience”—in other words, how he perceived and responded to these subjects, which were defined by light and air as time passed and the seasons changed.</p><p>The Art Institute has the largest group of Monet’s stacks of wheat in the world. An <a href="https://publications.artic.edu/monet/reader/paintingsanddrawings" target="_blank">online scholarly publication</a> delves into the museum’s collection of Monet’s paintings and drawings.</p>',
  },
  info: {
    license_text:
      "The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
    license_links: [
      "https://creativecommons.org/publicdomain/zero/1.0/",
      "https://www.artic.edu/terms",
    ],
    version: "1.10",
  },
  config: {
    iiif_url: "https://www.artic.edu/iiif/2",
    website_url: "http://www.artic.edu",
  },
};

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          "https://api.artic.edu/api/v1/agents/undefined?fields=id,title,is_artist,birth_date,death_date,description",
          () => {
            return HttpResponse.json(MokedData);
          }
        ),
      ],
    },
  },
};
