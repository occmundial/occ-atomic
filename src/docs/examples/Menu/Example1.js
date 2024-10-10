/* Menu */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Menu,
	MenuList,
	MenuDivider,
	MenuUser,
	MenuItem,
	NavAvatarButton,
	WindowSize,
	Drawer,
	NavTab,
	grid,
  colors,
} from '@occmundial/occ-atomic';

function Example1({ winWidth }) {
	const [open, setOpen] = useState(false);
	const [reference, setReference] = useState(null);
	const isMobile = winWidth < grid.xs;
	console.log({ winWidth, isMobile, grid, reference });

	return (
		<div style={{ position: 'relative' }}>
			<NavAvatarButton
				theme="ghost"
				photo="https://i.pravatar.cc/300"
				onClick={() => setOpen(open => !open)}
				reference={setReference}
			/>
			{!isMobile ? (
				<Menu
					open={open}
					setOpen={setOpen}
          placement="bottom-end"
					triggerRef={reference}
				>
					<div style={{ display: 'flex', flexDirection: 'column', rowGap: 12 }}>
						<MenuList component="nav" margin="size-3" dense>
							<MenuUser
								title="Nombre Apellido"
								subtitle="ejemplo@correo.com"
								avatarProps={{
									photo: 'https://i.pravatar.cc/300'
								}}
							/>
							<MenuDivider style={{ margin: '4px 0' }} />
							<MenuItem component="a" href="#MenuList">
								Configuración
							</MenuItem>
							<MenuItem component="a" href="#MenuList">
								Administrador de cuentas
							</MenuItem>
							<MenuItem component="a" href="#MenuList">
								Datos de facturación
							</MenuItem>
							<MenuItem component="a" href="#MenuList">
								Reporte de uso
							</MenuItem>
							<MenuItem component="a" href="#MenuList">
								Estado de cuenta
							</MenuItem>
							<MenuDivider style={{ margin: '4px 0' }} />
							<MenuItem component="a" href="#MenuList">
								Sitio de candidatos
							</MenuItem>
							<MenuItem onClick={() => console.log('logged-out')}>
								Cerrar sesión
							</MenuItem>
						</MenuList>
					</div>
				</Menu>
			) : (
				<Drawer
          show={open}
          container={document.body}
          onClose={setOpen}
					header={
						<NavTab
							noShadow
							left={[
								{
									key: 'icon',
									type: 'navButton',
									iconName: 'x',
									onClick: () => setOpen(false)
								},
								{
									key: 'custom',
									type: 'custom',
									custom: (
										<span
											style={{
												fontFamily: '"Pacifico", sans-serif',
												color: colors.sec,
												textDecoration: 'none',
												fontSize: 28,
												lineHeight: '32px'
											}}
										>
											Atomic
										</span>
									)
								}
							]}
						/>
					}
				>
					This is a default Drawer
				</Drawer>
			)}
		</div>
	);
}

Example1.propTypes = {
	winWidth: PropTypes.number
};

export default WindowSize(Example1);
