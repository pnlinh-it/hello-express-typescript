import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { User } from '../../user/schema/user.schema';
import { JwtPayloadDto } from '../dto/jwt-payload.dto';
import { config } from '../../../config/config';

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async (payload: JwtPayloadDto, done) => {
    try {
      const user = await User.findById(payload.sub);

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      return done(null, user);
    } catch (e) {
      return done(e);
    }
  }
);
