import React from 'react';

export const Child = (kuchbhi) => {
    return (
        <div>
            <p>
                i am {kuchbhi.name}   my age {kuchbhi.age }
            </p>
            <p>
                my friends name {kuchbhi.friend}
                {/* baap bete ku smjha skta mgr bap bete ku nai... kuchbhi=props zyada professional rhta */}
            </p>
        </div>
    );
};
