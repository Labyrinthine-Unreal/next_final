import '@google/model-viewer';

const Model = () => (
  <model-viewer
    src="/hartebeast.glb"
    ios-src=""
    poster="hartebeast.jpg"
    alt="hartebeast-mask"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
)

export default Model

// Place this wherever you need to import the <Model />
// import dynamic from 'next/dynamic'

// const Model = dynamic(
//   () => import('../Model'),
//   { ssr: false }
// )