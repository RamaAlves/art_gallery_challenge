import type { Meta, StoryObj } from "@storybook/react";

import { AgentsGrid } from "../../../../app/components/ui/Grid/AgentsGrid";

const meta = {
  title: "ui/AgentsGrid",
  component: AgentsGrid,
  tags: ["autodocs"],
} satisfies Meta<typeof AgentsGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

const agent = {
  id: 35809,
  title: "Claude Monet",
  is_artist: true,
  birth_date: 1840,
  death_date: 1926,
  description:
    '<p>Claude Monet was a pioneer of the French artistic movement known as Impressionism. Throughout his long career, Monet portrayed the people closest to him and the places he knew best. He favored family and friends as models, often working and exhibiting alongside fellow artists. In the early years he painted the forests of Fountainbleau, Parisian boulevards, suburban villages along the Seine, seaside towns, and flowering fields, and later, after buying a house at Giverny northwest of Paris, stacks of wheat and water lilies.&nbsp;Monet was a proponent of <em>plein air </em>painting, working directly out-of-doors on compositions he would later revise and sometimes complete in his studio. He painted his beloved water lilies in Giverny, where he tended to a water garden and a small pond spanned by a Japanese footbridge. Another favorite subject, <em>meules</em> (stacks of wheat sometimes referred to as “haystacks”), were for Monet a resonant symbol of sustenance and survival—constructed by humans but created by nature.</p><p>While Monet’s series paintings appear compositionally simple, the artist adapted his palette and brushwork to each temporal situation, conveying the complexity of color, light, and texture on each canvas.&nbsp;As he described, “One instant, one aspect of nature contains it all.” Only by working in series could Monet truly render, as he put it, “what I experience”—in other words, how he perceived and responded to these subjects, which were defined by light and air as time passed and the seasons changed.</p><p>The Art Institute has the largest group of Monet’s stacks of wheat in the world. An <a href="https://publications.artic.edu/monet/reader/paintingsanddrawings" target="_blank">online scholarly publication</a> delves into the museum’s collection of Monet’s paintings and drawings.</p>',
};

export const Default: Story = {
  args: {
    agents: [
      agent,
      agent,
      agent,
      agent,
      agent,
      agent,
      agent,
      agent,
      agent,
      agent,
      agent,
      agent,
    ],
  },
};
