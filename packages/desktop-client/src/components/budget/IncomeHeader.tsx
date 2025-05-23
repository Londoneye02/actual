import React, { type JSX } from 'react';
import { Trans } from 'react-i18next';

import { Button } from '@actual-app/components/button';
import { View } from '@actual-app/components/view';

import { RenderMonths } from './RenderMonths';

type IncomeHeaderProps = {
  MonthComponent?: () => JSX.Element;
  onShowNewGroup: () => void;
};

export function IncomeHeader({
  MonthComponent,
  onShowNewGroup,
}: IncomeHeaderProps) {
  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      <View
        style={{
          width: 200,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Button onPress={onShowNewGroup} style={{ fontSize: 12, margin: 10 }}>
          <Trans>Add group</Trans>
        </Button>
      </View>
      <RenderMonths
        component={MonthComponent}
        style={{ border: 0, justifyContent: 'flex-end' }}
      />
    </View>
  );
}
