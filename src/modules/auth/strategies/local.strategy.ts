import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../../user/schema/user.schema';
import * as bcrypt from 'bcrypt';

export const localStrategy = new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      return done(null, user);
    } catch (e) {
      return done(e);
    }
  }
);
