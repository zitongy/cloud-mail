import BizError from '../error/biz-error';
import settingService from './setting-service';
import { t } from '../i18n/i18n'

const turnstileService = {
	async verify(c, token) {
		// 直接跳过人机验证，什么都不做
		return;
	}
};

export default turnstileService;
