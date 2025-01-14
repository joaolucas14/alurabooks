import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputQuantidade, AbInputQuantidadeProps } from '../src'
import { useState } from '@storybook/addons';


export default {
  title: 'componentes/AbInputQuantidade',
  component: AbInputQuantidade,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputQuantidade>;

const Template: ComponentStory<typeof AbInputQuantidade> = () => {
  const [value, setValue] = useState(3)

  return <AbInputQuantidade value={value} onChange={setValue} />
};

export const Padrao = Template.bind({})

// export const AbInputQuantidadeComponent = Template.bind({})
// AbInputQuantidadeComponent.args = {
//     label: 'Uma label interessante',
//     value: 1,
//     onChange: () => {}
// } as AbInputQuantidadeProps