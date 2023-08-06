// We import three using namespace as shown
import * as THREE from "three";

// Then we create a scene using THREE.Scene()
const scene = new THREE.Scene();

/**
 * After Creating a scene we can add objects to it
 * like Box, Sphere, Plane, etc.
 * We can also add lights and cameras to the scene
 */

/**
 * For now we will add a red cube to the scene and a camera
 */

/**
 * To add a cube we need to create a geometry and a material
 * Geometry is the shape of the object
 * Material is the color of the object
 * We can also add textures to the material to make it look more realistic
 * we will cover that in later posts
 */

/**
 * To create a geometry we use THREE.BoxGeometry()
 * First parameter is the width of the cube
 * Second parameter is the height of the cube
 * Third parameter is the depth of the cube
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);

/**
 * To create a material we use THREE.MeshBasicMaterial()
 * We provide a color to the material by passing an object and
 * setting the color property.
 * You can pass color in hex format or in rgb format as shown
 */
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

/**
 * Now we create a mesh using THREE.Mesh()
 * Mesh is an object that takes a geometry and applies a material to it
 * and we add the mesh to the scene by using scene.add()
 */
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/**
 * Sizes
 * We create a sizes object to store the width and height of the canvas
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Now we create a camera
 * For creating a camera we use THREE.PerspectiveCamera()
 * First parameter is the field of view
 * Second parameter is the aspect ratio
 * Third parameter is the near clipping plane
 * Fourth parameter is the far clipping plane
 *
 * After creating a camera we set the position of the camera
 * using camera.position
 * and we add the camera to the scene using scene.add()
 *
 * FOV is the extent of the scene that is seen on the display
 * at any given moment. The value is in degrees.
 * Aspect Ratio is the ratio of width and height of the display area.
 * Near Clipping Plane is the minimum distance of the camera from the object.
 * Far Clipping Plane is the maximum distance of the camera from the object.
 */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer is used to render the scene using the camera
 * We create a renderer using THREE.WebGLRenderer()
 * It takes an object as a parameter and we pass the canvas property
 * Here canvas is the canvas element in the html file
 * We set the size of the renderer using renderer.setSize()
 *
 * After creating a renderer we render the scene using renderer.render()
 * It takes the scene and the camera as parameters
 */

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
