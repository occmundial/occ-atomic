export default `<Flexbox display="flex" style={{ width: '100vw', height: '61.8vw' }} alignItems="stretch">
  <div style={{ background: colors.grey900, width: '61.8%' }} />
  <Flexbox display="flex" direction="col" flex="1">
    <div style={{ background: colors.grey800, height: '61.8%' }} />
    <Flexbox display="flex" flex="1" direction="rowR">
      <div style={{ background: colors.grey700, width: '61.8%' }} />
      <Flexbox display="flex" flex="1" direction="colR">
        <div style={{ background: colors.grey600, height: '61.8%' }} />
        <Flexbox display="flex" flex="1">
          <div style={{ background: colors.grey500, width: '61.8%' }} />
          <Flexbox display="flex" flex="1" direction="col">
            <div style={{ background: colors.grey400, height: '61.8%' }} />
            <Flexbox display="flex" flex="1" direction="rowR">
              <div style={{ background: colors.grey300, width: '61.8%' }} />
			  <Flexbox display="flex" flex="1" direction="colR">
                <div style={{ background: colors.grey200, height: '61.8%' }} />
                <Flexbox display="flex" flex="1">
                  <div style={{ background: colors.grey100, width: '61.8%' }} />
                  <Flexbox display="flex" style={{ background: colors.grey50 }} flex="1" />
                </Flexbox>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </Flexbox>
</Flexbox>`;
