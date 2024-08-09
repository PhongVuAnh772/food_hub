import {ComponentType, PropsWithChildren, ReactElement, ReactNode} from 'react';
import React from 'react';

type ComposeProvidersProps = PropsWithChildren & {
  components: Array<ComponentType<PropsWithChildren>>;
};


function ComposeProviders(props: ComposeProvidersProps): ReactElement {
  return props.components.reduceRight(
    (memo, Component) => <Component>{memo}</Component>,
    props.children
  ) as ReactElement;
}
export default ComposeProviders;
