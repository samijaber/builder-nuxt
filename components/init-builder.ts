// Register your Builder components
import HelloWorldComponent from '../components/Builder/HelloWorld.vue'

export const REGISTERED_COMPONENTS = [
  {
    component: HelloWorldComponent,
    info: {
      name: 'Hello World',
      canHaveChildren: true,
      inputs: [
        {
          name: 'text',
          type: 'string',
          defaultValue: 'World',
        },
      ],
    },
  },
]
