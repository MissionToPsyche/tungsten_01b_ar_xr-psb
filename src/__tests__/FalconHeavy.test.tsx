import { render, screen } from '@testing-library/react';
import { FalconHeavy } from '../artifacts/FalconHeavy';

describe('<FalconHeavy />', () => {
  beforeEach(() => {
    // Render the component before each test
    render(<FalconHeavy />);
  });

  it('should render without errors', () => {
    // Check if the component renders without errors
    expect(screen.getByTestId('falcon-heavy')).toBeInTheDocument();
  });

  it('should have a mesh for the Cylinder', () => {
    // Check if the mesh for the Cylinder is present
    expect(screen.getByTestId('cylinder-mesh')).toBeInTheDocument();
  });

  it('should have an instanced mesh for Cylinder003', () => {
    // Check if the instanced mesh for Cylinder003 is present
    expect(
      screen.getByTestId('cylinder003-instanced-mesh')
    ).toBeInTheDocument();
  });

  it('should have shadows enabled for the meshes', () => {
    // Check if castShadow and receiveShadow are enabled for both meshes
    expect(screen.getByTestId('cylinder-mesh')).toHaveAttribute(
      'castShadow',
      'true'
    );
    expect(screen.getByTestId('cylinder-mesh')).toHaveAttribute(
      'receiveShadow',
      'true'
    );
    expect(screen.getByTestId('cylinder003-instanced-mesh')).toHaveAttribute(
      'castShadow',
      'true'
    );
    expect(screen.getByTestId('cylinder003-instanced-mesh')).toHaveAttribute(
      'receiveShadow',
      'true'
    );
  });

  it('should have the correct position for the Cylinder', () => {
    // Check if the Cylinder has the correct position
    const cylinderMesh = screen.getByTestId('cylinder-mesh');
    expect(cylinderMesh.getAttribute('position')).toEqual('0 0.66 0');
  });

  it('should have the correct scale for the Cylinder', () => {
    // Check if the Cylinder has the correct scale
    const cylinderMesh = screen.getByTestId('cylinder-mesh');
    expect(cylinderMesh.getAttribute('scale')).toEqual('0.407 0.407 0.407');
  });
});
