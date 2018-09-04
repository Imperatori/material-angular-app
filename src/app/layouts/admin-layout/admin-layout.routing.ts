import { Routes } from '@angular/router';

import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CommodityComponent } from '../../Commodity/Commodity.component';
import { TraderComponent } from '../../Trader/Trader.component';
import { TradeComponent } from '../../Trade/Trade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'commodity', component: CommodityComponent },
    { path: 'trader', component: TraderComponent },
    { path: 'trade', component: TradeComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'notifications', component: NotificationsComponent }
];
