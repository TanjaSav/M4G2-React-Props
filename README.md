# React Props

This project uses **React Vite + TypeScript** components with customizable props to ensure flexibility, reusability and clean separation of concerns. Below is a summary of the props implemented in the component and their purpose.

##  `promoBanner.tsx` Component

Displays a promotional card with image, text, and a call-to-action button.

## Props:

| Prop Name       | Type       | Description |
|----------------|------------|-------------|
| `subtitle`      | `string`   | Supporting text below the title. |
| `buttonText`    | `string`   | Text shown on the call-to-action button. |
| `imageSrc`      | `string`   | Path to the promotional image. |
| `buttonColor`   | `string`   | Background color of the button. |
| `backgroundColor` | `string` | Background color of the banner container. |
| `border`        | `string`   | CSS border style applied to the banner (e.g. `"1px solid #007E23"`). |


##  Why Props Matter
Props allow components to be:
- **Reusable** across different pages and contexts
- **Customizable** without modifying internal logic
- **Consistent** in structure while flexible in appearance
- **Easier to maintain** and extend as the project grows


## How to Install React with Vite + TypeScript

1. **Create a new Vite project**  
   `npm create vite@latest my-app -- --template react-ts`
- `my-app` is your project folder name — change it if needed.
- `--template react-ts` sets up React with TypeScript.
2. **Navigate into the project**
`cd my-app`
3. **Install dependencies**
`npm install`
4. **Start the development server**
`npm run dev`

## Demo Link: https://tanjasav.github.io/M4G2-React-Props/
