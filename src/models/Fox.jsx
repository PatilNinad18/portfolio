import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from '../assets/3d/fox.glb'

const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef()

  const { nodes, materials, animations } = useGLTF(scene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (!actions || !currentAnimation) return

    Object.values(actions).forEach(action => action.stop())
    actions[currentAnimation]?.reset().fadeIn(0.2).play()

    return () => {
      actions[currentAnimation]?.fadeOut(0.2)
    }
  }, [actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_10.skeleton} />
        <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_11.skeleton} />
      </group>
    </group>
  )
}

export default Fox
